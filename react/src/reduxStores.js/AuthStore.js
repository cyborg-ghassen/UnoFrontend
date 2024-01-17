import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'

export const storeAuth = configureStore({
  reducer: {
     Auth: authReducer,
  },
})