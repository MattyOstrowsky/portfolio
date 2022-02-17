import React from 'react'
import TextField from '@material-ui/core/TextField';


export default function TextFieldInput(props) {

    const { name, label, value, error = null, onChange } = props;

    return (
        <TextField style={{ margin: '1rem', minWidth: '100px' }}
            variant="outlined"
            type='number'
            onChange={onChange}
            label={label}
            name={name}
            value={value}
            {...(error && { error: true, helperText: error })} />
    )
}
