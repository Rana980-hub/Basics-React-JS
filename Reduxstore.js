// src/store.js or wherever your store is set up
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice'; // Adjust the path as needed

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  // Adding Redux DevTools support
  devTools: process.env.NODE_ENV !== 'production', // Enable DevTools in development mode
});

export default store;
