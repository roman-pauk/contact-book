import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import contacts from './contacts'
import modals from './modals'

export default combineReducers({
    modals,
    contacts,
    form: formReducer,
})