import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rKBshoI09eSYX9OPWwel/books';

const initialState = {
  books: [],
  loading: false,
  error: '',
};

export const getBook = createAsyncThunk('books/getBook', async () => {
  try {
    const response = await axios.get(apiURL);
    const { data } = response;
    const extractedObjects = Object.entries(data)
      .flatMap(([item_id, array]) => array.map((item) => ({ item_id, ...item })));

    return extractedObjects;
  } catch (error) {
    return error.message;
  }
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  try {
    await axios.post(apiURL, book);
    return book;
  } catch (error) {
    return error.message;
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (itemId) => {
  await axios.delete(`${apiURL}/${itemId}`);

  return itemId;
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBook.fulfilled, (state, action) => {
        state.books = action.payload;
        state.loading = false;
      })
      .addCase(getBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.books = [...state.books, action.payload];
        state.loading = false;
      })
      .addCase(addBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(removeBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book.item_id !== action.payload);
        state.loading = false;
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default bookSlice.reducer;
