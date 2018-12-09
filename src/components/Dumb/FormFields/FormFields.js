import React from 'react'
import { TextField } from '@material-ui/core'

export function RdTextField({
    input,
    label,
    type,
    meta: { touched, error }
}) {
    const has_err = !!(touched && error)
    return (
        <TextField
            {...input}
            type={type}
            label={has_err ? error : label}
            fullWidth
            margin="dense"
            error={has_err}
        />
    )
}

