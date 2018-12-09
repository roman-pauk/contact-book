import React from 'react'
import { SortableContainer } from 'react-sortable-hoc'

import ContactItem from './ContactItem'

function ContactsList({ items }) {
    return (
        <div style={{
            maxWidth: 1200,
            margin: 'auto',
            width: 'auto',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
        }}>
            {items.map((item, index) => (
                <ContactItem key={item.id} index={index} item={item} />
            ))}
        </div>
    )
}

export default SortableContainer(ContactsList)
