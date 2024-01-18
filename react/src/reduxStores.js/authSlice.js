import { createSlice } from '@reduxjs/toolkit'

const Auth = {
  value: false,
}

export const authSlice = createSlice({
  name: 'Auth',
  initialState:{
    value: false,
    basket:[]
  },
  reducers: {
    setTrue: (state) => {
      
      state.value = true
    },
    setFalse: (state) => {
      state.value = false
    },
    resetBasket:(state)=>{
      state.basket = []

    },
    setNewItemToBasket:(state , action)=>{
      const updatedBasket = state.basket.filter(item => item.id !== action.payload.id);
      
      // Add the new item to the updatedBasket
  updatedBasket.push(action.payload);

  // Update the state with the new basket
  state.basket = updatedBasket;
  
  // console.log(action.payload);
  // console.log("hello");
  // console.log(state.basket);

    },
    deleteOneItem:(state,action)=>{
      console.log("lsmslm")
      const updatedBasket = state.basket.filter(item => item.id !== action.payload.id);
      console.log(updatedBasket)
      state.basket = updatedBasket;
      
    },
    updateQuatity:(state,action)=>{
      // state.basket=state.basket.filter(item => item.id !== action.payload.id);
      var  i=state.basket.findIndex(item => item.id == action.payload.id)
      state.basket[i].quantity=action.payload.quantity;
    }

  },
})

// Action creators are generated for each case reducer function
export const {updateQuatity,deleteOneItem,setNewItemToBasket, resetBasket ,setTrue, setFalse} = authSlice.actions

export default authSlice.reducer