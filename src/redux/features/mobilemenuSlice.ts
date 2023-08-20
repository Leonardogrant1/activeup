import { createSlice } from "@reduxjs/toolkit";

export const mobilemenu = createSlice({
  name: "mobilemenu",
  initialState: false,
  reducers: {
    toggleMenu: (oldVal) => !oldVal,
  },
});

export const { toggleMenu } = mobilemenu.actions;
export default mobilemenu.reducer;
