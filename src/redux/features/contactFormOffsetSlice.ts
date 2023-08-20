import { createSlice } from "@reduxjs/toolkit";

export const contactFormOffset = createSlice({
  name: "contactformoffset",
  initialState: 0,
  reducers: {
    setOffset: (_, payload) => payload.payload,
  },
});

export const { setOffset } = contactFormOffset.actions;
export default contactFormOffset.reducer;
