import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    filterMyContact(state, action) {
      return (state = action.payload);
    },
  },
});

export const { filterMyContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

// Selectors

export const selectFilter = state => state.filter;
