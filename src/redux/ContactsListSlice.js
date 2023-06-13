import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { CONTACTS } from './constants';

export const ContactsListSlice = createSlice({
  name: CONTACTS,
  initialState,

  reducers: {
    addContact(state, {payload}) {
      state.push(payload);
    },
    deleteContact(state, {payload}) {
			return state.filter(contact => contact.id !== payload)
    },
  },
});

export const { addContact, deleteContact } = ContactsListSlice.actions;
export const getContacts = state => state.contacts;
