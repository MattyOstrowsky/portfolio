import React from 'react'
import { Button as MuiButton } from '@material-ui/core';



export default function ModelButton(props) {

    const { text, size, color, variant, onClick, ...other } = props

    return (
        <MuiButton
            variant={variant}
            size={size}
            color={color}
            onClick={onClick}
            style={{ width: '30vw', margin: '3rem' }}
            {...other}>
            {text}
        </MuiButton>
    )
}
