import { createSlice } from '@reduxjs/toolkit'


export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartNo: 0,
  },
  reducers: {
    setCartNo: (state, action) => {
      state.cartNo += action.payload;

    },

    cartPlus: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes 
      state.cartItems += 1
    },

    cartMinus: (state) => {
      if (state.cartItems == 0) {
        state.cartItems = 0
      } else {
        state.cartItems -= 1;
      }
    },

    // incrementByAmount: (state, action) => {
    //   state.cartItems += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { setCartNo, cartPlus, cartMinus } = CartSlice.actions

export default CartSlice.reducer