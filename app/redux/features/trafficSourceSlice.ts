import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TrafficSourceState {
  lastCount: number | null;
  lastFlag: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: TrafficSourceState = {
  lastCount: null,
  lastFlag: null,
  loading: false,
  error: null,
};

const trafficSourceSlice = createSlice({
  name: "trafficSource",
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    setLastCount(
      state,
      action: PayloadAction<{ flag: string; count: number }>,
    ) {
      state.lastFlag = action.payload.flag;
      state.lastCount = action.payload.count;
      state.error = null;
      state.loading = false;
    },
  },
});

export const { setLoading, setError, setLastCount } =
  trafficSourceSlice.actions;
export const trafficSourceReducer = trafficSourceSlice.reducer;
