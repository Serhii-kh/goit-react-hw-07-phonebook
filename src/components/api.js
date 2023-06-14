import axios from 'axios';
import {
	fetchingInProgress,
	fetchingSuccess,
	fetchingError
} from 'redux/ContactsListSlice';

axios.defaults.baseURL = 'https://6488c5720e2469c038fe5586.mockapi.io/contacts';

export const fetchContacts = () => async dispatch => {
	try {
		dispatch(fetchingInProgress())
		const {data} = await axios()
		console.log(data)
		dispatch(fetchingSuccess(data))
		return data
	} catch (error) {
		dispatch(fetchingError(error.message))
		console.log(error)
	}
}

export const postContact = async (contact) => {
	try {
		await axios.post(contact)
	} catch (error) {
		console.log(error)
	}
}

export const deleteContact = async (contact) => {
	try {
		await axios.delete(contact)
	} catch (error) {
		console.log(error)
	}
}