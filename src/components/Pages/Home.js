import React from 'react'

import TopBar from '../Dumb/TopBar'
import ContactsContainer from '../Smart/ContactsContainer'

import CreateModal from '../Dumb/CreateModal'
import EditModal from '../Dumb/EditModal'

function Home() {
    return (
        <div>
            <TopBar />
            <ContactsContainer />

            <CreateModal />
            <EditModal />
        </div>
    )
}

export default Home
