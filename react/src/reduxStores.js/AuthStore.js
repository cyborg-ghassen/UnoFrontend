import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authSlice'

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, authReducer);
export const storeAuth = configureStore({
  reducer: {
     Auth: persistedReducer,
  },
})
export const persistor = persistStore(storeAuth);