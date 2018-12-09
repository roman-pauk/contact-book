export const OPEN_CREATE_MODAL = 'OPEN_CREATE_MODAL'
export const CLOSE_CREATE_MODAL = 'CLOSE_CREATE_MODAL'

export const openCreateModal = () => ({
    type: OPEN_CREATE_MODAL
})

export const closeCreateModal = () => ({
    type: CLOSE_CREATE_MODAL
})

export const OPEN_EDIT_MODAL = 'OPEN_EDIT_MODAL'
export const CLOSE_EDIT_MODAL = 'CLOSE_EDIT_MODAL'

export const openEditModal = contact => ({
    type: OPEN_EDIT_MODAL,
    payload: contact,
})

export const closeEditModal = () => ({
    type: CLOSE_EDIT_MODAL
})