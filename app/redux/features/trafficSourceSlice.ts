// src/features/trafficSource/trafficSourceSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { trafficSourceApi } from "../services/trafficSourceApi";

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
      action: PayloadAction<{ flag: string; count: number }>
    ) {
      state.lastFlag = action.payload.flag;
      state.lastCount = action.payload.count;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        trafficSourceApi.endpoints.createTrafficSource.matchPending,
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        trafficSourceApi.endpoints.createTrafficSource.matchFulfilled,
        (state, action) => {
          state.loading = false;
          state.error = null;
          state.lastCount = action.payload.count;
          state.lastFlag = action.meta.arg.originalArgs.cameFrom;
        }
      )
      .addMatcher(
        trafficSourceApi.endpoints.createTrafficSource.matchRejected,
        (state, action) => {
          state.loading = false;
          state.error =
            action.error?.message || "Failed to record traffic source";
        }
      );
  },
});

export const { setLoading, setError, setLastCount } =
  trafficSourceSlice.actions;
export const trafficSourceReducer = trafficSourceSlice.reducer;
