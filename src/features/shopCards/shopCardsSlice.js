import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  summaPrice: 0,
};

const shopCardsSlice = createSlice({
  name: "shopCards",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      const newProduct = action.payload;

      const checkProduct = state.value.find(
        (item) => item.id === newProduct.id
      );

      if (checkProduct) {
        checkProduct.quantity += 1;
        checkProduct.totalPrice += newProduct.price;
        state.summaPrice += newProduct.price;
      } else {
        state.value.push({
          ...newProduct,
          quantity: 1,
          totalPrice: newProduct.price,
        });
        state.summaPrice += newProduct.price;
      }
    },

    incrementQuantity: (state, action) => {
      const itemId = action.payload;
      const checkItem = state.value.find((item) => item.id === itemId);

      if (checkItem) {
        checkItem.quantity += 1;
        checkItem.totalPrice += checkItem.price;
        state.summaPrice += checkItem.price;
      }
    },
    decrementQuantity: (state, action) => {
      const itemId = action.payload;
      const checkItem = state.value.find((item) => item.id === itemId);

      if (checkItem && checkItem.quantity > 1) {
        checkItem.quantity -= 1;
        checkItem.totalPrice -= checkItem.price;
        state.summaPrice -= checkItem.price;
      } else {
        state.value = state.value.filter((item) => item.id !== itemId);
        state.summaPrice -= checkItem.price;
      }
    },
  },
});

export const { addProduct, incrementQuantity, decrementQuantity } =
  shopCardsSlice.actions;
export default shopCardsSlice.reducer;
