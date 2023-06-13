import { ContactsListSlice } from "redux/ContactsListSlice";
import { FilterSlice } from "redux/FilterSlice";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { CONTACTS } from "redux/constants";

const persistConfig = {
  key: CONTACTS,
	storage,
	whitelist: [CONTACTS],
};

const rootReducer = combineReducers({
	contacts: ContactsListSlice.reducer,
	filter: FilterSlice.reducer,
})

export const persistedRootReducer = persistReducer(persistConfig, rootReducer)




