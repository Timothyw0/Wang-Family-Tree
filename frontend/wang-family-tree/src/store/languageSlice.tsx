import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface LanguageState {
  value: String;
}

const initialState = { value: "English" } as LanguageState;

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage(state, action: PayloadAction<String>) {
      state.value = action.payload;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
