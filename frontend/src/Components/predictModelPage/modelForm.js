import React from 'react'
import Grid from '@material-ui/core/Grid';
import ModelButton from './modelButton';
import { useForm, Forma } from './useForm';
import SelectForm from './select'
import * as options from './options'
import TextFieldInput from './textField'
import axios from 'axios'
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: '25px',
        boxShadow: theme.shadows[9],
        padding: theme.spacing(2, 4, 3),
    },
}));

const strokeValues = {
    gender: '',
    hypertension: '',
    heart_disease: '',
    ever_married: '',
    residence_type: '',
    smoking_status: '',
    working_type: '',
    avg_glucose: '',
    bmi: '',
    age: '',

}
export default function ModelForm() {
    const classes = useStyles();
    const validate = () => {
        let temp = {}
        if (values.avg_glucose.includes(','))
            values.avg_glucose.replace(",", ".")
        if (values.age.includes(','))
            values.age.replace(",", ".")
        if (values.bmi.includes(','))
            temp.bmi.replace(",", ".")
        temp.gender = values.gender.length !== 0 ? "" : "This field is required"
        temp.hypertension = values.hypertension.length !== 0 ? "" : "This field is required"
        temp.heart_disease = values.heart_disease.length !== 0 ? "" : "This field is required"
        temp.ever_married = values.ever_married.length !== 0 ? "" : "This field is required"
        temp.residence_type = values.residence_type.length !== 0 ? "" : "This field is required"
        temp.smoking_status = values.smoking_status.length !== 0 ? "" : "This field is required"
        temp.working_type = values.working_type.length !== 0 ? "" : "This field is required"
        temp.avg_glucose = values.avg_glucose > 0 ? "" : "This field is required"
        temp.bmi = values.bmi > 0 ? "" : "This field is required"
        temp.age = values.age > 0 ? "" : "This field is required"
        setErrors({
            ...temp
        })
        return Object.values(temp).every(x => x === "")
    };

    const {
        values,
        //setValues,
        errors,
        setErrors,
        handleInputChange,

    } = useForm(strokeValues);

    const [modelRes, setModelRes] = useState()

    const handleSubmit = e => {
        e.preventDefault();
        
        if (validate())
            axios.post(`${process.env.REACT_APP_API_URL}/strokemodel`, values)
                .then(res => {
                    setModelRes(res.data)
                    handleOpen();
                })
    }

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Forma onSubmit={handleSubmit}>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <Grid container
                            direction="column" justifyContent="center" alignItems="center"
                        >
                            <h2 id="transition-modal-title">{modelRes}%</h2>
                            <p id="transition-modal-description">This is your probability of having a stroke.</p>
                        </Grid>
                    </div>
                </Fade>
            </Modal>
            <Grid container
                justifyContent="center"
                display="flex"
            >
                <SelectForm
                    name='gender'
                    label='gender'
                    value={values.gender}
                    onChange={handleInputChange}
                    options={options.getGenderCollection()}
                    error={errors.gender} />
                <SelectForm
                    name='hypertension'
                    label='hypertension'
                    value={values.hypertension}
                    onChange={handleInputChange}
                    options={options.getYesNoCollection()}
                    error={errors.hypertension} />
                <SelectForm
                    name='heart_disease'
                    label='heart disease'
                    value={values.heart_disease}
                    onChange={handleInputChange}
                    options={options.getYesNoCollection()}
                    error={errors.heart_disease} />
                <SelectForm
                    name='ever_married'
                    label='ever married'
                    value={values.ever_married}
                    onChange={handleInputChange}
                    options={options.getYesNoCollection()}
                    error={errors.ever_married} />
                <SelectForm
                    name='residence_type'
                    label='residence type'
                    value={values.residence_type}
                    onChange={handleInputChange}
                    options={options.getResidenceCollection()}
                    error={errors.residence_type} />
                <SelectForm
                    name='smoking_status'
                    label='smoking status'
                    value={values.smoking_status}
                    onChange={handleInputChange}
                    options={options.getSmokeCollection()}
                    error={errors.smoking_status} />
                <SelectForm
                    name='working_type'
                    label='working_type'
                    value={values.working_type}
                    onChange={handleInputChange}
                    options={options.getWorkCollection()}
                    error={errors.working_type} />
                <Grid container
                    justifyContent="center"
                    display="flex">
                    <TextFieldInput
                        label='age'
                        name='age'
                        value={values.age}
                        error={errors.age}
                        onChange={handleInputChange} />
                    <TextFieldInput
                        label='avg glucose'
                        name='avg_glucose'
                        value={values.avg_glucose}
                        error={errors.avg_glucose}
                        onChange={handleInputChange} />
                    <TextFieldInput
                        label='bmi'
                        name='bmi'
                        value={values.bmi}
                        error={errors.bmi}
                        onChange={handleInputChange} />

                </Grid>
            </Grid>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={12}>
                    <ModelButton
                        type="submit"
                        variant="outlined"
                        color="primary"
                        size="large"
                        text='Check your stroke probability' />

                </Grid>
            </Grid>
        </Forma>

    )
}
