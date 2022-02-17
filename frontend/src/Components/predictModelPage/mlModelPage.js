import React from 'react';

import Paper from '@material-ui/core/Paper';
import ModelForm from './modelForm'



export default function MlModelPage() {
    return (

        <Paper elevation={3}
            style={{
                display: 'flex',
                margin: 'auto',
                marginTop: '8rem',
                width: '80vw',
                paddingBottom: '2rem',
                borderRadius: '25px',
                marginBottom: '10vw',
            }}>
            <ModelForm />
        </Paper>

    )
}

