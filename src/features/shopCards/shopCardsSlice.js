import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
}

const shopCardsSlice = createSlice({
  name: 'shopCards',
  initialState: initialState,
  reducers: {
    addShopCard: (state, action)=>{
      // state.value.some((item)=>item.id!=nimadir.id) && 
      const newItem = action.payload;

      const exists = state.value.some(item=>item.id===newItem.id)
      
      if(!exists){
        // state.value.push(newItem)
        state.value=[...state.value, newItem]
      }else{
        state.value=state.value.filter(item=>item.id!==newItem.id)
      }
      // state.value = [...state.value, nimadir]
    }
  }
})

export const {addShopCard} = shopCardsSlice.actions;
export default shopCardsSlice.reducer;