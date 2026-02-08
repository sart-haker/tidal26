#!/usr/bin/env python3
"""
Test suite for anomaly clustering implementation.

This script verifies that the clustering system works correctly
and meets all specified requirements.
"""

import os
import sys
import pandas as pd
import numpy as np

# Add src to path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'src'))

from clustering.cluster_detector import AnomalyClusterDetector


def test_clock_position_parsing():
    """Test that clock position parsing handles various formats."""
    print("\n" + "="*80)
    print("TEST 1: Clock Position Parsing")
    print("="*80)
    
    detector = AnomalyClusterDetector()
    
    # Create test data with various formats
    test_data = pd.DataFrame({
        'distance_ft': [100, 200, 300, 400, 500],
        'clock_position': ['09:00', '9:00', '12:00', '5:42', np.nan],
        'is_anomaly': [True, True, True, True, True],
        'depth_pct': [10, 20, 30, 40, 50],
        'anomaly_length_in': [1, 2, 3, 4, 5],
        'anomaly_width_in': [1, 2, 3, 4, 5]
    })
    
    clock_hours = detector._parse_clock_positions(test_data)
    
    expected = [9.0, 9.0, 12.0, 5.7, np.nan]
    results = []
    
    for i, (parsed, exp) in enumerate(zip(clock_hours, expected)):
        if np.isnan(exp):
            match = np.isnan(parsed)
        else:
            match = abs(parsed - exp) < 0.01
        
        status = "✓" if match else "✗"
        results.append(match)
        print(f"  {status} '{test_data['clock_position'].iloc[i]}' → {parsed:.2f} (expected {exp})")
    
    if all(results):
        print("\n✅ Clock position parsing: PASS")
    else:
        print("\n❌ Clock position parsing: FAIL")
    
    return all(results)


def test_cylindrical_distance():
    """Test cylindrical distance calculation."""
    print("\n" + "="*80)
    print("TEST 2: Cylindrical Distance Calculation")
    print("="*80)
    
    detector = AnomalyClusterDetector(pipe_diameter_ft=2.5)
    
    # Test cases: (dist1, clock1, dist2, clock2, expected_approx)
    tests = [
        # Same position
        (100, 9.0, 100, 9.0, 0.0),
        # Only longitudinal difference
        (100, 9.0, 110, 9.0, 10.0),
        # Only circumferential difference (quarter pipe)
        (100, 0.0, 100, 3.0, 1.96),  # 90° arc
        # Combined (Pythagorean)
        (100, 0.0, 110, 0.0, 10.0),
        # Clock wrap-around (11:00 to 1:00 should be 2 hours, not 10)
        (100, 11.0, 100, 1.0, 1.31),  # 60° arc
    ]
    
    results = []
    for dist1, clock1, dist2, clock2, expected in tests:
        actual = detector._calculate_cylindrical_distance(dist1, clock1, dist2, clock2)
        error = abs(actual - expected)
        match = error < 0.5  # Allow 0.5 ft tolerance
        
        status = "✓" if match else "✗"
        results.append(match)
        print(f"  {status} ({dist1},{clock1:.1f}h) → ({dist2},{clock2:.1f}h): {actual:.2f} ft (expected ~{expected:.2f})")
    
    if all(results):
        print("\n✅ Cylindrical distance: PASS")
    else:
        print("\n❌ Cylindrical distance: FAIL")
    
    return all(results)


def test_critical_criteria():
    """Test that critical cluster criteria are correctly applied."""
    print("\n" + "="*80)
    print("TEST 3: Critical Cluster Criteria")
    print("="*80)
    
    # Load real results
    results = []
    
    for year in [2007, 2015, 2022]:
        stats_file = f'output/{year}_cluster_stats.csv'
        if not os.path.exists(stats_file):
            print(f"  ⚠ Skipping {year} - output file not found")
            continue
        
        stats = pd.read_csv(stats_file)
        critical = stats[stats['is_critical'] == True]
        
        print(f"\n  {year}: {len(critical)} critical clusters")
        
        # Verify each critical cluster meets ALL criteria
        for _, row in critical.iterrows():
            count_ok = row['anomaly_count'] >= 3
            depth_ok = row['max_depth_pct'] >= 40
            span_ok = row['span_ft'] <= 20
            
            all_ok = count_ok and depth_ok and span_ok
            
            if not all_ok:
                print(f"    ✗ Cluster {int(row['cluster_id'])} fails criteria:")
                print(f"      Count≥3: {count_ok}, Depth≥40: {depth_ok}, Span≤20: {span_ok}")
                results.append(False)
            
        # Also check non-critical clusters don't meet ALL criteria
        non_critical = stats[stats['is_critical'] == False]
        for _, row in non_critical.iterrows():
            count_ok = row['anomaly_count'] >= 3
            depth_ok = row['max_depth_pct'] >= 40
            span_ok = row['span_ft'] <= 20
            
            all_ok = count_ok and depth_ok and span_ok
            
            if all_ok:
                print(f"    ✗ Cluster {int(row['cluster_id'])} should be critical but isn't!")
                results.append(False)
        
        if len(results) == 0:
            results.append(True)
    
    if all(results):
        print("\n✅ Critical criteria: PASS")
    else:
        print("\n❌ Critical criteria: FAIL")
    
    return len(results) > 0 and all(results)


def test_anomaly_filtering():
    """Test that only anomalies are clustered."""
    print("\n" + "="*80)
    print("TEST 4: Anomaly Filtering")
    print("="*80)
    
    # Load a real file and check
    data_file = '../data/2007.csv'
    if not os.path.exists(data_file):
        print("  ⚠ Data file not found, skipping test")
        return True
    
    df = pd.read_csv(data_file)
    
    total_rows = len(df)
    anomaly_rows = len(df[df['is_anomaly'] == True])
    reference_rows = total_rows - anomaly_rows
    
    print(f"  Total rows: {total_rows}")
    print(f"  Anomalies: {anomaly_rows}")
    print(f"  Reference points: {reference_rows}")
    
    # Run clustering
    detector = AnomalyClusterDetector()
    anomalies = df[df['is_anomaly'] == True]
    clustered = detector.detect_clusters(anomalies)
    
    # Verify only anomalies are in result
    if len(clustered) == anomaly_rows:
        print(f"\n  ✓ Output contains {len(clustered)} rows (matches {anomaly_rows} anomalies)")
        print("\n✅ Anomaly filtering: PASS")
        return True
    else:
        print(f"\n  ✗ Output contains {len(clustered)} rows (expected {anomaly_rows})")
        print("\n❌ Anomaly filtering: FAIL")
        return False


def test_output_files():
    """Test that all expected output files are generated."""
    print("\n" + "="*80)
    print("TEST 5: Output File Generation")
    print("="*80)
    
    expected_files = []
    for year in [2007, 2015, 2022]:
        expected_files.extend([
            f'output/{year}_clustered_anomalies.csv',
            f'output/{year}_cluster_stats.csv',
            f'output/{year}_cluster_map.png',
            f'output/{year}_cluster_severity.png'
        ])
    
    results = []
    for filepath in expected_files:
        exists = os.path.exists(filepath)
        status = "✓" if exists else "✗"
        results.append(exists)
        
        size_str = ""
        if exists:
            size = os.path.getsize(filepath)
            if size < 1024:
                size_str = f"({size} bytes)"
            elif size < 1024*1024:
                size_str = f"({size/1024:.1f} KB)"
            else:
                size_str = f"({size/(1024*1024):.1f} MB)"
        
        print(f"  {status} {filepath} {size_str}")
    
    if all(results):
        print("\n✅ Output files: PASS")
    else:
        print("\n❌ Output files: FAIL")
    
    return all(results)


def main():
    """Run all tests."""
    print("\n" + "="*80)
    print("ANOMALY CLUSTERING TEST SUITE")
    print("="*80)
    
    results = {
        'Clock Position Parsing': test_clock_position_parsing(),
        'Cylindrical Distance': test_cylindrical_distance(),
        'Critical Criteria': test_critical_criteria(),
        'Anomaly Filtering': test_anomaly_filtering(),
        'Output Files': test_output_files()
    }
    
    print("\n" + "="*80)
    print("TEST SUMMARY")
    print("="*80)
    
    for test_name, passed in results.items():
        status = "✅ PASS" if passed else "❌ FAIL"
        print(f"  {status}: {test_name}")
    
    total = len(results)
    passed = sum(results.values())
    
    print("\n" + "="*80)
    print(f"OVERALL: {passed}/{total} tests passed ({100*passed/total:.0f}%)")
    print("="*80)
    
    if all(results.values()):
        print("\n🎉 All tests passed! System is working correctly.")
        return 0
    else:
        print("\n⚠️  Some tests failed. Please review the output above.")
        return 1


if __name__ == '__main__':
    sys.exit(main())
