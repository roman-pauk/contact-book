import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dialog, DialogTitle, DialogContent, Zoom } from '@material-ui/core'

import { closeEditModal } from '../../actions/modals'
import { editContact } from '../../actions/contacts'
import ContactForm from './ContactForm'

class EditModal extends Component {
    onFormSubmit = data => {
        const contact = this.props.modal.contact|| {}
        const d = {
            ...contact,
            ...data,
        }
        this.props.editContact(contact.id, d)
    }
    render(){
        const { modal, closeModal } = this.props
        const ct = modal.contact || {}
        return (
            <Dialog
                open={modal.opened}
                onClose={closeModal}
                TransitionComponent={Zoom}
            >
                <DialogTitle>Edit contact</DialogTitle>
                <DialogContent>
                    <ContactForm 
                        initialValues={ct}
                        onFormSubmit={this.onFormSubmit}
                        btnText="Save Contact"
                    />
                </DialogContent>
            </Dialog>
        )
    }
}

const mapStateToProps = state => ({
    modal: state.modals.edit
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeEditModal()), 
    editContact: (id, d) => dispatch(editContact(id, d))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditModal)
