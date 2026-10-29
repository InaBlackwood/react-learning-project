import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const currentItem = action.payload;
      if ( !state.items.some(stateItems => stateItems.name === currentItem.name ) ) {
          currentItem.quantity = 1;
          state.items.push(currentItem);
      } 
      /*
          const isEquivalent = array.some(obj => obj.name === objToCheck.name );
          console.log(isEquivalent); // true
          const found = array.filter(obj =>  obj.name === objToCheck.name );
          console.log(found.length > 0); // true
      */
      
    },
    removeItem: (state, action) => {
      const currentItem = action.payload;
      const itemIndex = state.items.findIndex(stateItems => stateItems.name === currentItem.name);
      if ( itemIndex || itemIndex === 0) {
          state.items.splice(itemIndex,1);
      } 
    },
    updateQuantity: (state, action) => {
      console.log(state.items,action);
      const itemIndex = state.items.findIndex(stateItems => stateItems.name === action.payload.name);
      if ( itemIndex || itemIndex === 0) {
          state.items[itemIndex].quantity=action.payload.quantity;
      }

      /*
      const currentItem = action.payload;
      const itemIndex = state.items.findIndex(stateItems => stateItems.name === currentItem.name);
      
      if ( itemIndex ) {
          state.quantities[itemIndex]+=1;
      } */     

    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;