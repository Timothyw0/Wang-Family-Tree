import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ZoomState {
  transform: Array<number>;
}

const initialState = { transform: [] } as ZoomState;

const zoomSlice = createSlice({
  name: "zoom",
  initialState,
  reducers: {
    setZoom(state, action: PayloadAction<Array<number>>) {
      state.transform = action.payload;
    },
  },
});

export const { setZoom } = zoomSlice.actions;
export default zoomSlice.reducer;
