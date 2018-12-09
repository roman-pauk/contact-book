import axios from 'axios'

// const apiUri = 'https://api.myjson.com/bins/1d659i'
const apiUri = 'https://api.myjson.com/bins/ygqme'


export const GET_CONTACTS_REQUEST = 'GET_CONTACTS_REQUEST'
export const GET_CONTACTS_SUCCESS = 'GET_CONTACTS_SUCCESS'
export const GET_CONTACTS_FAIL = 'GET_CONTACTS_FAIL'

export const getContacts = () => {
    return async dispatch => {
        dispatch({
            type: GET_CONTACTS_REQUEST
        })
        try {
            const contacts = await axios.get(apiUri)
            console.log(contacts.data)
            dispatch({
                type: GET_CONTACTS_SUCCESS,
                payload: contacts.data.items
            })
        } catch (error) {
            dispatch({
                type: GET_CONTACTS_FAIL
            })
        }
    }
}

export const CHANGE_CONTACTS_ORDER = 'CHANGE_CONTACTS_ORDER'

export const changeOrder = (oldIndex, newIndex) =>({
    type: CHANGE_CONTACTS_ORDER,
    payload: {
        oldIndex,
        newIndex
    }
})

export const ADD_NEW_CONTACT = 'ADD_NEW_CONTACT'

export const addContact = data =>({
    type: ADD_NEW_CONTACT,
    payload: data
})

export const EDIT_CONTACT = 'EDIT_CONTACT'

export const editContact = (id, data) =>({
    type: EDIT_CONTACT,
    payload: {
        id,
        data,
    }
})

