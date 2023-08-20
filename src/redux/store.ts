import { configureStore } from "@reduxjs/toolkit";
import mobilemenuReducer from "./features/mobilemenuSlice";
import contactformOffsetReducer from "./features/contactFormOffsetSlice";

import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    mobilemenuReducer,
    contactformOffsetReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
