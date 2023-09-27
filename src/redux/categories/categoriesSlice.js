import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categorieSlice = createSlice({
  name: 'categorie',
  initialState,
  reducers: {
    getStatus: () => 'Under construction',
  },
});

export default categorieSlice.reducer;
export const getStatus = categorieSlice.actions;
