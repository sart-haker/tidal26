import numpy as np
import pandas as pd


def build_correction_function(weld_matches: pd.DataFrame):
    if len(weld_matches) == 0:
        return lambda x: x

    run2_positions = weld_matches["run2_distance"].values
    run1_positions = weld_matches["run1_distance"].values

    def correct(run2_pos):
        if pd.isna(run2_pos):
            return np.nan
        return np.interp(run2_pos, run2_positions, run1_positions)

    return correct


def correct_positions(df: pd.DataFrame, correction_fn) -> pd.DataFrame:
    df = df.copy()
    df["corrected_distance"] = df["log_distance"].apply(correction_fn)
    return df
