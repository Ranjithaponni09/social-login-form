import { configureStore } from '@reduxjs/toolkit';
import { logoutUser } from './authSlice';

export const Store = configureStore({
  reducer: {
    auth: logoutUser,
  },
});
