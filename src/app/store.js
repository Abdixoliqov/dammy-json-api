import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import shopCardsReducer from "../features/shopCards/shopCardsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    shopCards: shopCardsReducer,
  },
});
