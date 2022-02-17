import React from 'react';
import Typical from 'react-typical';
import { Grid, Avatar, makeStyles} from '@material-ui/core';
import deepOrange from '@material-ui/core/colors/deepOrange';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
  },
  root1: {
    width: '40vw',
    textAlign: 'center',
    height: '6rem', 
    marginBottom: '2rem',
    fontSize: '0.8rem',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem',
      marginBottom: '5rem',
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    width: '20rem',
    height: '20rem',
    marginTop: '10rem',
    marginBottom: '3rem',
    [theme.breakpoints.down('sm')]: {
      width: '10rem',
      height: '10rem',
    },
  },
}));

export default function Photo() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      display="flex"
      className={classes.root}
    >
      <Avatar src="./back.jpg" className={classes.orange}></Avatar>
      <h1 className={classes.root1}>Hello! My Name is Matt.
        <Typical steps={['I\'m programmer and data scientist!', 1000, 'Read more about me!', 300]} loop={Infinity} wrapper="p" />
      </h1>
    </Grid>
  );
}