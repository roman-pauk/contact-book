import React from 'react'
import { connect } from 'react-redux'
import { SortableElement, SortableHandle } from 'react-sortable-hoc'
import { Card, CardContent, CardHeader, CardActions, Fab, Typography, Icon, IconButton, Avatar } from '@material-ui/core'

import { openEditModal } from '../../actions/modals'

const DragHandle = SortableHandle(() => (
    <IconButton>
        <Icon>drag_indicator</Icon>
    </IconButton>
))

const  ContactItem = ({ item, openEditModal }) => {
    return (
        <div style={{
            flex: "0 0 280px",
            padding: 20
        }}>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar
                            src={item.avatar}
                        />
                    }
                    action={
                        <DragHandle />
                    }
                />
                <CardContent>
                    <Typography variant="title">{item.first_name} {item.last_name}</Typography>
                    <Typography>{item.phone}</Typography>
                    <Typography>{item.email}</Typography>
                </CardContent>
                <CardActions>
                    <Fab size="small" color="primary" aria-label="Edit" onClick={() => openEditModal(item)}>
                        <Icon>edit_icon</Icon>
                    </Fab>
                </CardActions>
            </Card>
        </div>
    )
}

export default SortableElement(connect(null, { openEditModal })(ContactItem))
