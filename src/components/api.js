import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6488c5720e2469c038fe5586.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios();
      console.log(data);
      return data;
		} catch (e) {
			console.log(e)
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);



// export const postContact = async contact => {
//   try {
//     await axios.post(contact);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const deleteContact = async contact => {
//   try {
//     await axios.delete(contact);
//   } catch (error) {
//     console.log(error);
//   }
// };
