import { createSlice } from "@reduxjs/toolkit";

interface AppSourceState {
  garconModal: boolean;
}

const initialState: AppSourceState = {
  garconModal: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setOpenGarconModal: (state) => {
      state.garconModal = true;
    },
    setCloseGarconModal: (state) => {
      state.garconModal = true;
    },
  },
});

export const { setOpenGarconModal, setCloseGarconModal } = appSlice.actions;
export const appReducer = appSlice.reducer;
