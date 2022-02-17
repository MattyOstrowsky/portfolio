import React from 'react'
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '75vw',
        padding: '2rem',
        margin: 'auto',
    },

}));

export function useForm(strokeValues) {

    const [values, setValues] = useState(strokeValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,

    }
}


export function Forma(props) {

    const classes = useStyles();
    const { children, ...other } = props;


    return (
        <form className={classes.root} autoComplete='off' {...other}>
            {props.children}
        </form>
    )
}
