import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { CONTACTS } from './constants';
import { fetchContacts } from 'components/api';

export const ContactsListSlice = createSlice({
  name: CONTACTS,
  initialState,

  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [fetchContacts.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },

  reducers: {
    addContact(state, { payload }) {
      state.push(payload);
    },
    deleteContact(state, { payload }) {
      return state.filter(contact => contact.id !== payload);
    },
  },
});

export const contactReducer = ContactsListSlice.reducer;
export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error

export const {addContact, deleteContact} = ContactsListSlice.actions
