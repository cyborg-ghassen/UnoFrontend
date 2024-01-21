import { createSlice } from '@reduxjs/toolkit'
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
      return {
        ...state,
        value: false,
      };
    },
    resetBasket:(state)=>{
      return {
        ...state,
        basket: [],
      };
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
      // console.log("lsmslm")
      const updatedBasket = state.basket.filter(item => item.id !== action.payload.id);
      // console.log(updatedBasket)
      state.basket = updatedBasket;
      
    },
    updateQuatity:(state,action)=>{

      console.log(action.payload)
      const index = state.basket.findIndex(item => item.id === action.payload.id);
      
      if (index !== -1) {
        const updatedBasket = [...state.basket];
        updatedBasket[index] = { ...updatedBasket[index], Quantity: action.payload.quantity };
    
        console.log(updatedBasket)
        state.basket = [...updatedBasket];
        console.log(state.basket)
      }
    }

  },
})

// Action creators are generated for each case reducer function
export const {updateQuatity,deleteOneItem,setNewItemToBasket, resetBasket ,setTrue, setFalse} = authSlice.actions

export default authSlice.reducer