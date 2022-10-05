import { createSlice } from '@reduxjs/toolkit';
import { contactApi } from './api';

export const phoneBookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: [],
    filter: '',
  },

  reducers: {
    filterContact: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, removeContact, filterContact } =
  phoneBookSlice.actions;
