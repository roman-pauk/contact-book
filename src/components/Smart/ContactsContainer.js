import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CircularProgress } from '@material-ui/core'

import { getContacts, changeOrder } from '../../actions/contacts'
import { openCreateModal } from '../../actions/modals'
import ContactsList from '../Dumb/ContactsList'
import Button from '../Dumb/Button/Button'


class ContactsContainer extends Component {

    componentDidMount() {
        this.props.getContacts()
    }

    onSortEnd = ({ oldIndex, newIndex }) => {
        if (oldIndex ===  newIndex) {
            return
        }
        this.props.changeOrder(oldIndex, newIndex)
    }
    
    render() {
        const { contacts, openCreateModal } = this.props

        if (contacts.fetching) {
            return (
                <div style={{
                    textAlign: 'center',
                    margin: 20,
                }}>
                    <CircularProgress disableShrink />
                </div>
            )
        }

        return (
            <div style={{
                margin: 20
            }}>
                <ContactsList axis="xy" items={contacts.data} onSortEnd={this.onSortEnd} useDragHandle />
                <div style={{
                    textAlign: "center",
                    padding: 20
                }}>
                    <Button onClick={openCreateModal}>Add contact</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    contacts: state.contacts.list
})

export default connect(mapStateToProps, { getContacts, changeOrder, openCreateModal })(ContactsContainer)
