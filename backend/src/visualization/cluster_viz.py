"""
Visualization functions for anomaly cluster analysis.

This module provides matplotlib-based visualizations to display cluster patterns
and severity metrics for pipeline ILI data.
"""

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from matplotlib.patches import Ellipse
from scipy.spatial import ConvexHull
import warnings


def plot_cluster_map(
    clustered_df: pd.DataFrame,
    save_path: str = 'cluster_map.png',
    dpi: int = 150
) -> None:
    """
    Create 2D scatter plot showing CRITICAL and WARNING clusters along the pipeline.
    
    This visualization displays critical and warning anomaly clusters in a 2D space 
    representing the unwrapped cylindrical pipeline surface.
    
    - X-axis: Longitudinal position (distance_ft)
    - Y-axis: Circumferential position (clock hours)
    - Point color: Cluster assignment
    - Point size: Proportional to depth percentage
    
    Critical Criteria: >=3 anomalies, max_depth >= 40%, span <= 20 ft
    Warning: Severity score > 50 (but not critical)
    
    Args:
        clustered_df: DataFrame with cluster_id and clock_hours columns
        save_path: Output file path for PNG image
        dpi: Image resolution (dots per inch)
    """
    if len(clustered_df) == 0:
        print("Warning: No data to plot")
        return
    
    # Create figure - reduce height to minimize white space
    fig, ax = plt.subplots(figsize=(20, 8))
    
    # Separate noise points from clusters
    noise_mask = clustered_df['cluster_id'] == -1
    cluster_df = clustered_df[~noise_mask]
    
    # Identify critical and warning clusters
    critical_cluster_ids = []
    warning_cluster_ids = []
    total_clusters = 0
    
    if len(cluster_df) > 0:
        unique_clusters = sorted(cluster_df['cluster_id'].unique())
        total_clusters = len(unique_clusters)
        
        for cluster_id in unique_clusters:
            cluster_data = cluster_df[cluster_df['cluster_id'] == cluster_id]
            
            # Check if critical
            is_critical = (
                len(cluster_data) >= 3 and
                cluster_data['depth_pct'].max() >= 40 and
                (cluster_data['distance_ft'].max() - cluster_data['distance_ft'].min()) <= 20
            )
            
            if is_critical:
                critical_cluster_ids.append(cluster_id)
            else:
                # Check if warning (severity > 50)
                # Calculate severity score
                max_depth = cluster_data['depth_pct'].max()
                count = len(cluster_data)
                total_length = cluster_data['anomaly_length_in'].sum()
                severity = 0.4 * max_depth + 0.3 * count * 5 + 0.3 * total_length
                
                if severity > 50:
                    warning_cluster_ids.append(cluster_id)
    
    # Combine critical and warning clusters
    display_cluster_ids = critical_cluster_ids + warning_cluster_ids
    
    # Plot clusters if any exist
    if len(display_cluster_ids) > 0:
        display_df = cluster_df[cluster_df['cluster_id'].isin(display_cluster_ids)]
        
        # Generate colors
        cmap = plt.cm.get_cmap('tab20')
        colors = [cmap(i / max(len(display_cluster_ids), 1)) for i in range(len(display_cluster_ids))]
        
        # Plot each cluster
        for idx, cluster_id in enumerate(display_cluster_ids):
            cluster_data = display_df[display_df['cluster_id'] == cluster_id]
            
            # Determine if critical or warning
            is_critical = cluster_id in critical_cluster_ids
            
            # Larger point size for better visibility
            sizes = cluster_data['depth_pct'] * 6  # Increased to 6
            
            # Different edge colors for critical vs warning
            edge_color = 'red' if is_critical else 'orange'
            edge_width = 3.0 if is_critical else 2.0
            label_suffix = 'CRITICAL' if is_critical else 'WARNING'
            
            # Plot cluster points
            ax.scatter(
                cluster_data['distance_ft'],
                cluster_data['clock_hours'],
                s=sizes,
                c=[colors[idx]],
                label=f'C{cluster_id} ({label_suffix}): n={len(cluster_data)}, {cluster_data["depth_pct"].max():.0f}%',
                alpha=0.85,
                edgecolors=edge_color,
                linewidths=edge_width
            )
            
            # Draw convex hull
            valid_points = cluster_data[['distance_ft', 'clock_hours']].dropna()
            if len(valid_points) >= 3:
                try:
                    points = valid_points.values
                    hull = ConvexHull(points)
                    
                    hull_color = 'red' if is_critical else 'orange'
                    hull_alpha = 0.5 if is_critical else 0.3
                    
                    for simplex in hull.simplices:
                        ax.plot(
                            points[simplex, 0],
                            points[simplex, 1],
                            color=hull_color,
                            alpha=hull_alpha,
                            linewidth=1.5
                        )
                except Exception:
                    pass
    
    # Get actual data range to minimize white space
    if len(display_df) > 0:
        x_min = display_df['distance_ft'].min()
        x_max = display_df['distance_ft'].max()
        x_range = x_max - x_min
        
        # Add 5% padding on each side
        x_padding = x_range * 0.05
        ax.set_xlim(x_min - x_padding, x_max + x_padding)
    
    # Formatting with larger fonts
    ax.set_xlabel('Distance Along Pipeline (feet)', fontsize=15, fontweight='bold')
    ax.set_ylabel('Clock Position (hours)', fontsize=15, fontweight='bold')
    ax.set_title('Critical & Warning Anomaly Clusters - 2D Pipeline View', fontsize=17, fontweight='bold', pad=20)
    ax.set_ylim(-0.5, 12.5)  # Slight padding on Y axis
    ax.set_yticks(range(0, 13, 1))
    ax.tick_params(axis='both', which='major', labelsize=13)
    ax.grid(True, alpha=0.35, linestyle='--', linewidth=0.9)
    
    # Legend with better positioning
    if len(display_cluster_ids) > 0:
        # Place legend outside plot area
        legend = ax.legend(loc='center left', bbox_to_anchor=(1.02, 0.5), fontsize=10, 
                          framealpha=0.95, edgecolor='black', fancybox=True, shadow=True)
        legend.set_title('Clusters', prop={'size': 11, 'weight': 'bold'})
    
    # Add text box with summary
    n_critical = len(critical_cluster_ids)
    n_warning = len(warning_cluster_ids)
    textstr = f'Total: {total_clusters}\n'
    textstr += f'Critical: {n_critical}\n'
    textstr += f'Warning: {n_warning}\n'
    textstr += f'Hidden: {total_clusters - n_critical - n_warning}'
    props = dict(boxstyle='round', facecolor='yellow', alpha=0.85, edgecolor='black', linewidth=2.5)
    ax.text(
        0.015, 0.985, textstr,
        transform=ax.transAxes,
        fontsize=13,
        fontweight='bold',
        verticalalignment='top',
        bbox=props
    )
    
    plt.tight_layout()
    plt.savefig(save_path, dpi=dpi, bbox_inches='tight')
    plt.close()
    
    print(f"Cluster map saved to: {save_path} (showing {n_critical} critical + {n_warning} warning)")


def plot_cluster_severity(
    cluster_stats: pd.DataFrame,
    save_path: str = 'cluster_severity.png',
    dpi: int = 150
) -> None:
    """
    Create bar chart showing CRITICAL and WARNING cluster severity scores.
    
    Displays only critical and high-severity clusters (>50) with increased spacing
    between bars for improved readability.
    
    Critical Criteria: >=3 anomalies, max_depth >= 40%, span <= 20 ft
    Warning: Severity score > 50
    
    Args:
        cluster_stats: DataFrame from analyze_clusters() with severity_score column
        save_path: Output file path for PNG image
        dpi: Image resolution (dots per inch)
    """
    if len(cluster_stats) == 0:
        print("Warning: No cluster statistics to plot")
        return
    
    # Store totals before filtering
    total_clusters = len(cluster_stats)
    n_critical_total = cluster_stats['is_critical'].sum()
    n_warning_total = ((cluster_stats['severity_score'] > 50) & ~cluster_stats['is_critical']).sum()
    n_normal_total = total_clusters - n_critical_total - n_warning_total
    
    # Filter to only critical or warning (severity > 50)
    filtered_stats = cluster_stats[
        (cluster_stats['is_critical'] == True) | 
        (cluster_stats['severity_score'] > 50)
    ].copy()
    
    if len(filtered_stats) == 0:
        print("No critical or warning clusters to display")
        return
    
    # Sort by severity descending
    sorted_stats = filtered_stats.sort_values('severity_score', ascending=False)
    
    # Calculate figure width based on number of bars for better spacing
    n_bars = len(sorted_stats)
    # Increase width to provide more space per bar
    fig_width = max(16, n_bars * 0.4)  # At least 0.4 inches per bar
    fig, ax = plt.subplots(figsize=(fig_width, 8))
    
    # Prepare data
    cluster_ids = [f"C{int(cid)}" for cid in sorted_stats['cluster_id']]
    severity_scores = sorted_stats['severity_score'].values
    anomaly_counts = sorted_stats['anomaly_count'].values
    is_critical = sorted_stats['is_critical'].values
    max_depths = sorted_stats['max_depth_pct'].values
    
    # Determine bar colors
    colors = []
    for i, critical in enumerate(is_critical):
        if critical:
            colors.append('red')
        else:
            colors.append('orange')
    
    # Create bars with increased spacing (width = 0.7 instead of default 0.8)
    bar_width = 0.65
    positions = range(len(cluster_ids))
    
    bars = ax.bar(
        positions,
        severity_scores,
        width=bar_width,
        color=colors,
        alpha=0.85,
        edgecolor='black',
        linewidth=1.8
    )
    
    # Annotate bars with anomaly count and depth
    for i, (bar, count, depth) in enumerate(zip(bars, anomaly_counts, max_depths)):
        height = bar.get_height()
        # Show count and max depth with better formatting
        ax.text(
            bar.get_x() + bar.get_width() / 2,
            height + 3,
            f'n={int(count)}\n{depth:.0f}%',
            ha='center',
            va='bottom',
            fontsize=10,
            fontweight='bold',
            bbox=dict(boxstyle='round,pad=0.3', facecolor='white', alpha=0.7, edgecolor='none')
        )
    
    # Add horizontal line at warning threshold
    ax.axhline(
        y=50,
        color='darkred',
        linestyle='--',
        linewidth=3,
        alpha=0.7,
        label='Warning Threshold (50)',
        zorder=0
    )
    
    # Formatting with larger fonts and better spacing
    ax.set_xlabel('Cluster ID', fontsize=15, fontweight='bold', labelpad=10)
    ax.set_ylabel('Severity Score', fontsize=15, fontweight='bold', labelpad=10)
    ax.set_title('Critical & Warning Cluster Severity Analysis', 
                 fontsize=17, fontweight='bold', pad=20)
    ax.set_xticks(positions)
    ax.set_xticklabels(cluster_ids, rotation=45, ha='right', fontsize=11)
    ax.tick_params(axis='y', which='major', labelsize=13)
    ax.tick_params(axis='x', which='major', labelsize=11, length=6)
    
    # Grid for better readability
    ax.grid(True, axis='y', alpha=0.4, linestyle='--', linewidth=1)
    ax.set_axisbelow(True)
    
    # Add some padding to y-axis
    y_max = max(severity_scores)
    ax.set_ylim(0, y_max * 1.15)
    
    # Legend
    from matplotlib.patches import Patch
    legend_elements = [
        Patch(facecolor='red', alpha=0.85, edgecolor='black', linewidth=1.8, label='Critical'),
        Patch(facecolor='orange', alpha=0.85, edgecolor='black', linewidth=1.8, label='Warning (>50)'),
    ]
    ax.legend(handles=legend_elements, loc='upper right', fontsize=13, 
             framealpha=0.95, edgecolor='black', fancybox=True, shadow=True)
    
    # Add summary statistics
    n_critical_shown = is_critical.sum()
    n_warning_shown = (~is_critical).sum()
    
    textstr = f'Total: {total_clusters}\n'
    textstr += f'Shown: {len(sorted_stats)}\n'
    textstr += f'  Critical: {n_critical_shown}\n'
    textstr += f'  Warning: {n_warning_shown}\n'
    textstr += f'Hidden: {n_normal_total}'
    props = dict(boxstyle='round', facecolor='yellow', alpha=0.9, 
                edgecolor='black', linewidth=2.5)
    ax.text(
        0.015, 0.985, textstr,
        transform=ax.transAxes,
        fontsize=13,
        fontweight='bold',
        verticalalignment='top',
        bbox=props
    )
    
    plt.tight_layout()
    plt.savefig(save_path, dpi=dpi, bbox_inches='tight')
    plt.close()
    
    print(f"Severity chart saved to: {save_path} (showing {len(sorted_stats)} clusters with increased spacing)")
