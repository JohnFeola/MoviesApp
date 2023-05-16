import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movieSlice';

const store2 = configureStore({
  reducer: {
    movie: movieReducer,
  },
});

export default store2;

