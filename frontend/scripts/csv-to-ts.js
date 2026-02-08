/**
 * Convert backend CSV outputs to TypeScript data modules.
 * Run: node scripts/csv-to-ts.js
 */
const fs = require("fs");
const path = require("path");

const OUTPUT_DIR = path.join(__dirname, "../src/lib/data");
const CSV_DIR = path.join(__dirname, "../../backend/output");

function parseCSV(text) {
  const lines = text.trim().split("\n");
  const headers = lines[0].split(",");
  return lines.slice(1).map((line) => {
    const values = [];
    let current = "";
    let inQuotes = false;
    for (const ch of line) {
      if (ch === '"') { inQuotes = !inQuotes; }
      else if (ch === "," && !inQuotes) { values.push(current); current = ""; }
      else { current += ch; }
    }
    values.push(current);
    const obj = {};
    headers.forEach((h, i) => { obj[h.trim()] = values[i]?.trim() ?? ""; });
    return obj;
  });
}

function toNum(v) {
  if (v === "" || v === undefined || v === null) return null;
  const n = Number(v);
  return isNaN(n) ? null : Math.round(n * 10000) / 10000; // 4 decimal places
}

function toBool(v) {
  return v === "True" || v === "true" || v === "1";
}

// ── Matched anomalies ──
function convertMatched(rows) {
  return rows.map((r) => ({
    run1_idx: toNum(r.run1_idx),
    run2_idx: toNum(r.run2_idx),
    confidence: toNum(r.confidence),
    event_type: r.event_type,
    run1_distance: toNum(r.run1_distance),
    run2_distance: toNum(r.run2_distance),
    run1_clock: toNum(r.run1_clock),
    run2_clock: toNum(r.run2_clock),
    depth_run1: toNum(r.depth_run1),
    depth_run2: toNum(r.depth_run2),
    depth_change: toNum(r.depth_change),
    depth_growth_rate: toNum(r.depth_growth_rate),
    length_run1: toNum(r.length_run1),
    length_run2: toNum(r.length_run2),
    length_change: toNum(r.length_change),
    length_growth_rate: toNum(r.length_growth_rate),
    width_run1: toNum(r.width_run1),
    width_run2: toNum(r.width_run2),
    width_change: toNum(r.width_change),
    width_growth_rate: toNum(r.width_growth_rate),
    is_critical: toBool(r.is_critical),
  }));
}

// ── Weld alignment ──
function convertWelds(rows) {
  return rows.map((r) => ({
    run1_idx: toNum(r.run1_idx),
    run2_idx: toNum(r.run2_idx),
    joint_number: toNum(r.joint_number),
    run1_distance: toNum(r.run1_distance),
    run2_distance: toNum(r.run2_distance),
    offset: toNum(r.offset),
  }));
}

// ── New / missing anomalies (extract 8 relevant fields) ──
function convertExceptions(rows) {
  return rows.map((r) => ({
    original_index: toNum(r.original_index),
    log_distance: toNum(r.log_distance),
    event_type_normalized: r.event_type_normalized || "",
    clock_decimal: toNum(r.clock_decimal),
    depth_percent: toNum(r.depth_percent),
    length: toNum(r.length),
    width: toNum(r.width),
    joint_number: toNum(r.joint_number),
  }));
}

// ── Cluster stats ──
function convertClusterStats(rows) {
  return rows.map((r) => ({
    cluster_id: toNum(r.cluster_id),
    start_distance_ft: toNum(r.start_distance_ft),
    end_distance_ft: toNum(r.end_distance_ft),
    span_ft: toNum(r.span_ft),
    center_distance_ft: toNum(r.center_distance_ft),
    avg_clock_position: toNum(r.avg_clock_position),
    anomaly_count: toNum(r.anomaly_count),
    max_depth_pct: toNum(r.max_depth_pct),
    avg_depth_pct: toNum(r.avg_depth_pct),
    total_length_in: toNum(r.total_length_in),
    avg_width_in: toNum(r.avg_width_in),
    severity_score: toNum(r.severity_score),
    is_critical: toBool(r.is_critical),
  }));
}

// ── Predictions ──
function convertPredictions(rows) {
  return rows.map((r) => ({
    prediction_distance: toNum(r.prediction_distance),
    corrosion_probability: toNum(r.corrosion_probability),
    predicted_corrosion: toNum(r.predicted_corrosion),
    wall_thickness: toNum(r.wall_thickness),
    elevation: toNum(r.elevation),
    clock_position: toNum(r.clock_position),
    event_type_normalized: r.event_type_normalized || "",
    anomaly_density_50ft: toNum(r.anomaly_density_50ft),
    dist_to_bend: toNum(r.dist_to_bend),
    dist_to_girth_weld: toNum(r.dist_to_girth_weld),
  }));
}

function readCSV(filename) {
  const filepath = path.join(CSV_DIR, filename);
  if (!fs.existsSync(filepath)) { console.warn(`  SKIP: ${filename} not found`); return []; }
  return parseCSV(fs.readFileSync(filepath, "utf-8"));
}

function writeTS(filename, varName, data, typeName) {
  const importLine = `import type { ${typeName} } from "../types";\n\n`;
  const content = importLine + `export const ${varName}: ${typeName}[] = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(path.join(OUTPUT_DIR, filename), content);
  console.log(`  ✓ ${filename} (${data.length} rows)`);
}

// ── Main ──
console.log("Converting CSV → TypeScript data modules...\n");

// Run pairs
const pairs = [
  { r1: 2007, r2: 2015 },
  { r1: 2015, r2: 2022 },
  { r1: 2007, r2: 2022 },
];

for (const { r1, r2 } of pairs) {
  const prefix = `${r1}_vs_${r2}`;
  console.log(`[${prefix}]`);

  const matched = convertMatched(readCSV(`${prefix}_matched_anomalies.csv`));
  const welds = convertWelds(readCSV(`${prefix}_weld_alignment.csv`));
  const newAnomalies = convertExceptions(readCSV(`${prefix}_new_anomalies.csv`));
  const missing = convertExceptions(readCSV(`${prefix}_missing_anomalies.csv`));

  const slug = `run-${r1}-vs-${r2}`;
  const importLines = [
    `import type { MatchedAnomaly, NewAnomaly, MissingAnomaly, WeldAlignment } from "../types";`,
    "",
  ];
  const content = importLines.join("\n") + [
    `export const matched: MatchedAnomaly[] = ${JSON.stringify(matched, null, 2)};`,
    "",
    `export const newAnomalies: NewAnomaly[] = ${JSON.stringify(newAnomalies, null, 2)};`,
    "",
    `export const missing: MissingAnomaly[] = ${JSON.stringify(missing, null, 2)};`,
    "",
    `export const welds: WeldAlignment[] = ${JSON.stringify(welds, null, 2)};`,
    "",
  ].join("\n");

  fs.writeFileSync(path.join(OUTPUT_DIR, `${slug}.ts`), content);
  console.log(`  ✓ ${slug}.ts (matched=${matched.length}, new=${newAnomalies.length}, missing=${missing.length}, welds=${welds.length})`);
}

// Cluster stats
console.log("\n[Clusters]");
const clusterImports = `import type { ClusterStats } from "../types";\n\n`;
const clusterExports = [];
for (const year of [2007, 2015, 2022]) {
  const stats = convertClusterStats(readCSV(`${year}_cluster_stats.csv`));
  clusterExports.push(`export const clusters${year}: ClusterStats[] = ${JSON.stringify(stats, null, 2)};`);
  console.log(`  ✓ ${year}: ${stats.length} clusters`);
}
fs.writeFileSync(path.join(OUTPUT_DIR, "clusters.ts"), clusterImports + clusterExports.join("\n\n") + "\n");

// Predictions
console.log("\n[Predictions]");
const predictions = convertPredictions(readCSV("predictions_2022_future.csv"));
writeTS("predictions.ts", "predictions", predictions, "PredictionResult");

console.log("\nDone!");
