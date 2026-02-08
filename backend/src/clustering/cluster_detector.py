"""
Anomaly cluster detection for pipeline ILI data.

This module implements DBSCAN clustering with custom cylindrical distance metrics
to identify interaction zones where multiple nearby anomalies could create
combined structural weakness.
"""

import numpy as np
import pandas as pd
from sklearn.cluster import DBSCAN
from typing import Tuple
import sys
import os

# Add parent directory to path to import utils
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from utils.clock_position import parse_clock_position


class AnomalyClusterDetector:
    """
    Detects clusters of anomalies in pipeline ILI data using cylindrical geometry.
    
    The detector uses DBSCAN clustering with a custom distance metric that accounts
    for the cylindrical shape of the pipeline, calculating distances along both
    longitudinal (pipe length) and circumferential (around pipe) dimensions.
    
    Attributes:
        longitudinal_tolerance_ft (float): Maximum longitudinal distance for clustering (feet)
        circumferential_tolerance_deg (float): Maximum circumferential angle for clustering (degrees)
        min_anomalies (int): Minimum number of anomalies to form a cluster
        pipe_diameter_ft (float): Pipeline outer diameter (feet)
        pipe_radius_ft (float): Pipeline radius (feet)
    """
    
    def __init__(
        self,
        longitudinal_tolerance_ft: float = 10.0,
        circumferential_tolerance_deg: float = 90,
        min_anomalies: int = 2,
        pipe_diameter_ft: float = 2.5
    ):
        """
        Initialize the anomaly cluster detector.
        
        Args:
            longitudinal_tolerance_ft: Maximum distance along pipe for clustering (feet)
            circumferential_tolerance_deg: Maximum angle around pipe for clustering (degrees)
            min_anomalies: Minimum number of anomalies to form a cluster
            pipe_diameter_ft: Pipeline outer diameter (feet)
        """
        self.longitudinal_tolerance_ft = longitudinal_tolerance_ft
        self.circumferential_tolerance_deg = circumferential_tolerance_deg
        self.min_anomalies = min_anomalies
        self.pipe_diameter_ft = pipe_diameter_ft
        self.pipe_radius_ft = pipe_diameter_ft / 2.0
        
    def _parse_clock_positions(self, df: pd.DataFrame) -> np.ndarray:
        """
        Parse clock position strings to decimal hours.
        
        Args:
            df: DataFrame containing 'clock_position' column
            
        Returns:
            Array of decimal hours (0-12), NaN for invalid/missing values
        """
        clock_hours = np.full(len(df), np.nan)
        
        for i, clock_str in enumerate(df['clock_position']):
            parsed = parse_clock_position(clock_str)
            if parsed is not None:
                clock_hours[i] = parsed
                
        return clock_hours
    
    def _calculate_cylindrical_distance(
        self,
        dist1: float,
        clock1: float,
        dist2: float,
        clock2: float
    ) -> float:
        """
        Calculate 3D distance between two points on a cylindrical pipeline.
        
        The distance combines:
        1. Longitudinal distance along the pipe axis
        2. Circumferential arc length around the pipe surface
        
        Args:
            dist1: First point longitudinal position (feet)
            clock1: First point clock position (decimal hours)
            dist2: Second point longitudinal position (feet)
            clock2: Second point clock position (decimal hours)
            
        Returns:
            3D Euclidean distance (feet)
        """
        # Longitudinal distance
        long_dist = abs(dist1 - dist2)
        
        # Handle missing clock positions - use only longitudinal distance
        if np.isnan(clock1) or np.isnan(clock2):
            return long_dist
        
        # Convert clock hours to radians (12 hours = 2π radians)
        angle1 = (clock1 / 12.0) * 2 * np.pi
        angle2 = (clock2 / 12.0) * 2 * np.pi
        
        # Calculate shortest angular distance (handle wrap-around)
        angle_diff = abs(angle1 - angle2)
        angle_diff = min(angle_diff, 2 * np.pi - angle_diff)
        
        # Convert angle to arc length on pipe surface
        circ_dist = self.pipe_radius_ft * angle_diff
        
        # 3D Euclidean distance
        distance_3d = np.sqrt(long_dist**2 + circ_dist**2)
        
        return distance_3d
    
    def _build_distance_matrix(
        self,
        distances: np.ndarray,
        clock_hours: np.ndarray
    ) -> np.ndarray:
        """
        Build pairwise distance matrix for all anomalies.
        
        Args:
            distances: Array of longitudinal distances (feet)
            clock_hours: Array of clock positions (decimal hours)
            
        Returns:
            N×N distance matrix where N is number of anomalies
        """
        n = len(distances)
        dist_matrix = np.zeros((n, n))
        
        for i in range(n):
            for j in range(i + 1, n):
                dist = self._calculate_cylindrical_distance(
                    distances[i], clock_hours[i],
                    distances[j], clock_hours[j]
                )
                dist_matrix[i, j] = dist
                dist_matrix[j, i] = dist
                
        return dist_matrix
    
    def _calculate_epsilon(self) -> float:
        """
        Calculate DBSCAN epsilon parameter from tolerance ellipse.
        
        Returns:
            Maximum neighbor distance for clustering (feet)
        """
        # Convert circumferential tolerance from degrees to arc length
        circ_arc_length_ft = self.pipe_radius_ft * np.radians(self.circumferential_tolerance_deg)
        
        # Epsilon is diagonal of tolerance ellipse
        epsilon = np.sqrt(
            self.longitudinal_tolerance_ft**2 + circ_arc_length_ft**2
        )
        
        return epsilon
    
    def detect_clusters(self, df: pd.DataFrame) -> pd.DataFrame:
        """
        Detect anomaly clusters in the dataset.
        
        Args:
            df: DataFrame containing anomaly data with columns:
                - distance_ft: Longitudinal position (feet)
                - clock_position: Circumferential position (time format)
                - is_anomaly: Boolean flag (only True rows are clustered)
                
        Returns:
            DataFrame with added 'cluster_id' column:
                - cluster_id >= 0: Cluster number
                - cluster_id == -1: Noise (unclustered anomaly)
        """
        # Filter to anomalies only
        anomalies = df[df['is_anomaly'] == True].copy().reset_index(drop=True)
        
        if len(anomalies) == 0:
            # Return empty DataFrame if no anomalies
            return pd.DataFrame()
        
        # Parse clock positions
        clock_hours = self._parse_clock_positions(anomalies)
        distances = anomalies['distance_ft'].values
        
        # Build distance matrix
        dist_matrix = self._build_distance_matrix(distances, clock_hours)
        
        # Calculate epsilon
        epsilon = self._calculate_epsilon()
        
        # Run DBSCAN
        dbscan = DBSCAN(
            eps=epsilon,
            min_samples=self.min_anomalies,
            metric='precomputed'
        )
        cluster_labels = dbscan.fit_predict(dist_matrix)
        
        # Add cluster_id to DataFrame
        anomalies['cluster_id'] = cluster_labels
        
        # Add parsed clock hours for later analysis
        anomalies['clock_hours'] = clock_hours
        
        return anomalies
    
    def analyze_clusters(self, clustered_df: pd.DataFrame) -> pd.DataFrame:
        """
        Calculate statistics for each cluster.
        
        Args:
            clustered_df: DataFrame from detect_clusters() with cluster_id column
            
        Returns:
            DataFrame with one row per cluster containing:
                - cluster_id: Cluster number
                - start_distance_ft: Minimum longitudinal position
                - end_distance_ft: Maximum longitudinal position
                - span_ft: Longitudinal span
                - center_distance_ft: Mean longitudinal position
                - avg_clock_position: Mean clock position (hours)
                - anomaly_count: Number of anomalies in cluster
                - max_depth_pct: Maximum depth percentage
                - avg_depth_pct: Average depth percentage
                - total_length_in: Sum of anomaly lengths
                - avg_width_in: Average anomaly width
                - severity_score: Calculated severity score
                - is_critical: Boolean flag for critical clusters
        """
        if len(clustered_df) == 0:
            return pd.DataFrame()
        
        # Group by cluster_id (including noise = -1)
        grouped = clustered_df.groupby('cluster_id')
        
        stats_list = []
        
        for cluster_id, group in grouped:
            # Skip noise points for detailed analysis
            if cluster_id == -1:
                continue
            
            # Basic position statistics
            start_dist = group['distance_ft'].min()
            end_dist = group['distance_ft'].max()
            span_ft = end_dist - start_dist
            center_dist = group['distance_ft'].mean()
            
            # Clock position average (handle NaN values)
            clock_values = group['clock_hours'].dropna()
            avg_clock = clock_values.mean() if len(clock_values) > 0 else np.nan
            
            # Anomaly characteristics
            anomaly_count = len(group)
            max_depth = group['depth_pct'].max()
            avg_depth = group['depth_pct'].mean()
            
            # Size metrics (handle NaN)
            total_length = group['anomaly_length_in'].sum()
            avg_width = group['anomaly_width_in'].mean()
            
            # Severity score calculation
            severity_score = (
                0.4 * max_depth +
                0.3 * anomaly_count * 5 +
                0.3 * total_length
            )
            
            # Critical criteria: ALL THREE conditions must be met
            is_critical = (
                anomaly_count >= 3 and
                max_depth >= 40 and
                span_ft <= 20
            )
            
            stats_list.append({
                'cluster_id': int(cluster_id),
                'start_distance_ft': float(start_dist),
                'end_distance_ft': float(end_dist),
                'span_ft': float(span_ft),
                'center_distance_ft': float(center_dist),
                'avg_clock_position': float(avg_clock) if not np.isnan(avg_clock) else np.nan,
                'anomaly_count': int(anomaly_count),
                'max_depth_pct': float(max_depth),
                'avg_depth_pct': float(avg_depth),
                'total_length_in': float(total_length),
                'avg_width_in': float(avg_width),
                'severity_score': float(severity_score),
                'is_critical': bool(is_critical)
            })
        
        return pd.DataFrame(stats_list)
    
    def get_cluster_members(
        self,
        clustered_df: pd.DataFrame,
        cluster_id: int
    ) -> pd.DataFrame:
        """
        Get all anomalies belonging to a specific cluster.
        
        Args:
            clustered_df: DataFrame from detect_clusters()
            cluster_id: Cluster ID to retrieve
            
        Returns:
            DataFrame containing all anomalies in the specified cluster
        """
        return clustered_df[clustered_df['cluster_id'] == cluster_id].copy()
