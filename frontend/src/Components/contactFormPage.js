import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { buttons, ContactInfo } from '../Info.json';
import Paper from '@material-ui/core/Paper';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme();
theme.typography.subtitle1 = {
  fontSize: '0.7rem',
  '@media (min-width:600px)': {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
};
// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: 'auto',
      marginTop: '8rem',
      width: '40vw',
      paddingBottom: '2rem',
      borderRadius: '25px',
      marginBottom: '10vw',
    },
  },
  title: {
    fontWeight: 400,
    fontSize: '3em',
    margin: '2rem',
    textAlign: 'center',
  },

  columnImg: {
    padding: '0 5rem',
  },
  columnForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    padding: '0 2rem',
  },
  papier:{
    display: 'flex',
    flexDirection: 'column',

  }
}));

const emptyEmail = {
  fullName: '',
  email: '',
  to_name: 'Mateo',
  message: '',
};

const ContactHome = () => {
  const classes = useStyles();
  const { title, userID, serviceID, templateID } = ContactInfo;
  const { wait, submit } = buttons;
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [email, setEmail] = useState(emptyEmail);


  const handleChange = (e) => {
    e.persist();
    setEmail((prev) => (
      { ...prev, [e.target.name]: e.target.value }
    ));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      await emailjs.send(serviceID, templateID, email, userID);
      setMessage('Thank you!');
      setEmail(emptyEmail);
    } catch (err) {
      setMessage('error!');
    } finally {
      setLoading(false);
    }
  };
  return (
    <Slide direction="up" in timeout={1000}>
          <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            display="flex"
            className={classes.gridcard}
          >
        <Grid item xs={12}>
          <Typography className={classes.title} variant="h2">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} className={classes.columnForm}>
          <form onSubmit={handleSubmit} className={classes.form}>
            <TextField
              margin="dense"
              name="fullName"
              variant="outlined"
              id="fullName"
              value={email.fullName}
              label="your name (optional)"
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              type="email"
              name="email"
              variant="outlined"
              id="email"
              value={email.email}
              label="email"
              onChange={handleChange}
              required
            />
            <TextField
              margin="dense"
              multiline
              rows="8"
              name="message"
              variant="outlined"
              id="message"
              value={email.message}
              label="type here"
              onChange={handleChange}
              required
            />
            <Button
              className={classes.button}
              type="submit"
              variant="contained"
              color="inherit"
              disabled={loading}
            >
              {loading ? wait : submit}
            </Button>
            {message === null ? null : (
              <Typography variant="h6" className={classes.text}>
                {message}
              </Typography>
            )}
          </form>
        </Grid>
        </Grid>
        </Paper>
      </ThemeProvider>
    </div>
    </Slide>
  );
};

export default ContactHome;
