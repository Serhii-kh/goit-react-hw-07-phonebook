import axios from 'axios';

axios.defaults.baseURL = 'https://6488c5720e2469c038fe5586.mockapi.io/contacts';

export const fetchContacts = async () => {
	try {
		const {data} = await axios()
		console.log(data)
		return data
	} catch (error) {
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