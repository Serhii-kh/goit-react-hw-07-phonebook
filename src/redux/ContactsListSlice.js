import { createSlice } from '@reduxjs/toolkit';
// import { createAsyncThunk } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { CONTACTS } from './constants';


export const ContactsListSlice = createSlice({
  name: CONTACTS,
  initialState,

  reducers: {
    fetchingInProgress(state) {
			state.isLoading = true;
		},
		fetchingSuccess(state, {payload}) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
   fetchingError(state, {payload}) {
      state.isLoading = false;
      state.error = payload;
		},
	 
	 addContact(state, {payload}) {
      state.push(payload);
    },
    deleteContact(state, {payload}) {
			return state.filter(contact => contact.id !== payload)
    },
	 
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError, addContact, deleteContact} = ContactsListSlice.actions;
export const getContacts = state => state.contacts.items;
