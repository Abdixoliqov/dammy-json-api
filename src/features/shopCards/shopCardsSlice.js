import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  summaPrice: 0,
};

const shopCardsSlice = createSlice({
  name: "shopCards",
  initialState: initialState,
  reducers: {
    addShopCard: (state, action) => {
      // state.value.some((item)=>item.id!=nimadir.id) &&
      const newItem = action.payload;

      const exists = state.value.some((item) => item.id === newItem.id);

      const newObj = {
        id: newItem.id,
        title: newItem.title,
        price: parseFloat(newItem.price.toFixed(2)),
        images: newItem.images,
        quantity: 1,
        totalPrise: newItem.price,
      };

      if (!exists) {
        // state.value.push(newItem)
        state.value = [...state.value, newObj];
        state.summaPrice += parseFloat(newItem.price.toFixed(2));
      } else {
        state.value = state.value.filter((item) => item.id !== newItem.id);
        state.summaPrice -= parseFloat(newItem.price.toFixed(2));
      }
      console.log(state.value, "newitem");
      // state.value = [...state.value, nimadir]
      // const totalArr = state.value.map((item) => item.price);
      // const sum = totalArr.reduce((a, b) => a + b, 0);
      // state.summaPrice=sum;
    },
    deleteShopCard: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
      state.summaPrice -= action.payload.price;
    },
    // sumPrices: (state, action) => {
    //   const newArr = state.value.map((item) => item.price);
    //   const sum = newArr.reduce((a, b) => a + b, 0);
    //   state.summaPrice = sum;
    // },
  },
});

export const { addShopCard, deleteShopCard, sumPrices } =
  shopCardsSlice.actions;
export default shopCardsSlice.reducer;
