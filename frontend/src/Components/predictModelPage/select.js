import { FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText } from '@material-ui/core';
import React from 'react'

export default function SelectForm(props) {
    const { name, label, value, error = null, onChange, options } = props;
    
    return (
        <FormControl variant="outlined" style={{ margin: '1rem', minWidth: '150px' }}
            {...(error && { error: true})}>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                defaultValue=""
                label={label}
                name={name}
                value={value}
                onChange={onChange}
            >
                <MenuItem aria-label="None" value="" />
                {
                    options.map(
                        item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
                    )
                }
            </MuiSelect>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}
