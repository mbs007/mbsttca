import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: { items: [], keyStrokes: [] },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearAllItems: (state) => {
      state.items = [];
    },
    addKeyStrokes: (state, action) => {
      state.keyStrokes.push(action.payload);
    },
    clearAllKeyStrokes: (state) => {
      state.keyStrokes = [];
    },
  },
});

export const { addItem, clearAllItems,addKeyStrokes,clearAllKeyStrokes } = appSlice.actions;
export default appSlice.reducer;
