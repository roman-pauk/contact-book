import * as modal_act from '../actions/modals'
import { EDIT_CONTACT, ADD_NEW_CONTACT } from '../actions/contacts'

const initialState = {
    create: {
        opened: false,
    },
    edit: {
        contact: null,
        opened: false,
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case modal_act.OPEN_CREATE_MODAL:
            return {
                ...state,
                create: {
                    opened: true
                }
            }
        case modal_act.CLOSE_CREATE_MODAL:
        case ADD_NEW_CONTACT:
            return {
                ...state,
                create: {
                    opened: false
                }
            }
        case modal_act.OPEN_EDIT_MODAL:
            return {
                ...state,
                edit: {
                    opened: true,
                    contact: action.payload
                }
            }
        case modal_act.CLOSE_EDIT_MODAL:
        case EDIT_CONTACT:
            return {
                ...state,
                edit: {
                    opened: false,
                    contact: null
                }
            }
        default:
            return state
    }
}