import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/booksSlice';
import categorieReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    book: bookReducer,
    categorie: categorieReducer,
  },
});

export default store;
