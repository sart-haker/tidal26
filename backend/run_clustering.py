#!/usr/bin/env python3
"""
Run anomaly clustering analysis on pipeline ILI data.

This script processes normalized ILI data from multiple inspection years
and identifies anomaly clusters using cylindrical distance metrics and
DBSCAN clustering algorithm.

Usage:
    python run_clustering.py

Output:
    For each year (2007, 2015, 2022):
    - {year}_clustered_anomalies.csv: Anomalies with cluster_id
    - {year}_cluster_stats.csv: Cluster statistics
    - {year}_cluster_map.png: 2D visualization
    - {year}_cluster_severity.png: Severity bar chart
"""

import os
import sys
import pandas as pd

# Add src to path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'src'))

from clustering.cluster_detector import AnomalyClusterDetector
from visualization.cluster_viz import plot_cluster_map, plot_cluster_severity


def main():
    """Main execution function."""
    
    # Ensure output directory exists
    output_dir = 'output'
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        print(f"Created output directory: {output_dir}/")
    
    # Data directory
    data_dir = '../data'
    
    # Years to process
    years = [2007, 2015, 2022]
    
    # Process each year
    for year in years:
        print(f"\n{'='*80}")
        print(f"Processing {year} data...")
        print('='*80)
        
        # Load data
        csv_path = os.path.join(data_dir, f'{year}.csv')
        
        if not os.path.exists(csv_path):
            print(f"Error: File not found: {csv_path}")
            continue
        
        try:
            df = pd.read_csv(csv_path)
            print(f"Loaded {len(df)} total records")
        except Exception as e:
            print(f"Error loading {csv_path}: {e}")
            continue
        
        # Filter to anomalies only
        if 'is_anomaly' not in df.columns:
            print(f"Error: 'is_anomaly' column not found in {year}.csv")
            continue
        
        anomalies = df[df['is_anomaly'] == True].copy()
        print(f"Found {len(anomalies)} anomalies")
        
        if len(anomalies) == 0:
            print(f"No anomalies to cluster in {year} data")
            continue
        
        # Initialize detector
        detector = AnomalyClusterDetector(
            longitudinal_tolerance_ft=10.0,
            circumferential_tolerance_deg=90,
            min_anomalies=2,
            pipe_diameter_ft=2.5
        )
        
        # Detect clusters
        try:
            clustered_df = detector.detect_clusters(anomalies)
            
            if len(clustered_df) == 0:
                print(f"No clusters detected in {year} data")
                continue
            
            # Analyze clusters
            cluster_stats = detector.analyze_clusters(clustered_df)
            
            # Calculate summary statistics
            n_clusters = len(cluster_stats)
            n_critical = cluster_stats['is_critical'].sum() if len(cluster_stats) > 0 else 0
            n_noise = (clustered_df['cluster_id'] == -1).sum()
            
            print(f"Identified {n_clusters} clusters")
            print(f"Critical clusters: {n_critical}")
            print(f"Isolated anomalies: {n_noise}")
            
        except Exception as e:
            print(f"Error during clustering: {e}")
            import traceback
            traceback.print_exc()
            continue
        
        # Save outputs
        try:
            # CSV outputs
            clustered_csv = os.path.join(output_dir, f'{year}_clustered_anomalies.csv')
            clustered_df.to_csv(clustered_csv, index=False)
            print(f"  → Saved: {clustered_csv}")
            
            stats_csv = os.path.join(output_dir, f'{year}_cluster_stats.csv')
            cluster_stats.to_csv(stats_csv, index=False)
            print(f"  → Saved: {stats_csv}")
            
            # Visualizations
            map_png = os.path.join(output_dir, f'{year}_cluster_map.png')
            plot_cluster_map(clustered_df, save_path=map_png)
            
            severity_png = os.path.join(output_dir, f'{year}_cluster_severity.png')
            plot_cluster_severity(cluster_stats, save_path=severity_png)
            
            print(f"✓ All outputs saved to {output_dir}/ directory")
            
        except Exception as e:
            print(f"Error saving outputs: {e}")
            import traceback
            traceback.print_exc()
            continue
    
    print(f"\n{'='*80}")
    print("Clustering analysis complete!")
    print('='*80)


if __name__ == '__main__':
    main()
