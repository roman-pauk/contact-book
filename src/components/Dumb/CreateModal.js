import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dialog, DialogTitle, DialogContent, Zoom } from '@material-ui/core'
import uuidv4 from 'uuid/v4'

import { closeCreateModal } from '../../actions/modals'
import { addContact } from '../../actions/contacts'
import ContactForm from './ContactForm'

class CreateModal extends Component {
    onFormSubmit = data => {
        const d = {
            ...data,
            avatar: 'https://static.hypercomments.com/data/avatars/2460838/avatar',
            id: uuidv4()
        }
        this.props.addContact(d)
    }
    render(){
        const { modal, closeModal } = this.props
        return (
            <Dialog
                open={modal.opened}
                onClose={closeModal}
                TransitionComponent={Zoom}
            >
                <DialogTitle>Add contact</DialogTitle>
                <DialogContent>
                    <ContactForm 
                        initialValues={{
                            first_name: '',
                            last_name: '',
                            phone: '',
                            email: '',
                            birth_date: '1993-10-09',
                        }}
                        onFormSubmit={this.onFormSubmit}
                        btnText="Add Contact"
                    />
                </DialogContent>
            </Dialog>
        )
    }
}

const mapStateToProps = state => ({
    modal: state.modals.create
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeCreateModal()), 
    addContact: d => dispatch(addContact(d))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateModal)
