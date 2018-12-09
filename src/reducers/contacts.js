import { combineReducers } from 'redux'
import { arrayMove } from 'react-sortable-hoc'

import * as cnt_act from '../actions/contacts'

const initialState = {
    list: {
        data: [],
        fetching: false,
        errors: false,
    }
}

const list = (state = initialState.list, action) => {
    switch (action.type) {
        case cnt_act.GET_CONTACTS_REQUEST:
            return {
                ...initialState.list,
                fetching: true,
            }
        case cnt_act.GET_CONTACTS_SUCCESS:
            return {
                ...initialState.list,
                data: action.payload,
            }
        case cnt_act.GET_CONTACTS_FAIL:
            return {
                ...initialState.list,
                errors: true,
            }
        case cnt_act.CHANGE_CONTACTS_ORDER:
            return {
                ...state,
                data: arrayMove(state.data, action.payload.oldIndex, action.payload.newIndex)
            }
        case cnt_act.ADD_NEW_CONTACT:
            return {
                ...state,
                data: state.data.concat(action.payload)
            }
        case cnt_act.EDIT_CONTACT:
            return {
                ...state,
                data: state.data.map(el => el.id === action.payload.id ? action.payload.data : el)
            }
        default:
            return state
    }
}

export default combineReducers({
    list,
})