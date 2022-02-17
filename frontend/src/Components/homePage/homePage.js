import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ProjectCard from '../projectsPage/projectCard';
import Button from '@material-ui/core/Button';
import { IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ClassIcon from '@material-ui/icons/Class';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import axios from 'axios';

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

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: 'auto',
      marginTop: '0',
      width: '80vw',
      paddingBottom: '2rem',
      borderRadius: '25px',
      marginBottom: '10vw',
    },
  },
  text: {
    padding: '1rem',
    paddingBottom: '2rem',
    justifyContent: "center",
    alignItems: "center",
    paddingRight: '20vw',
    paddingLeft: '20vw',
    textAlign: 'center',

  },
  button: {
    alignItems: "center",
    fontFamily: 'Roboto',
    borderRadius: '25px',
    paddingLeft: '2vh',
    paddingRight: '2vh',
  },
  gridcard: {
    paddingBottom: '2rem',
    borderRadius: '25px',
    marginTop: '4rem'
  },
  iconsize: {
    fontSize: 'small',

    '@media (min-width:600px)': {
      fontSize: 'medium',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 'large',

    },

  }
}));

export default function Section() {
  const classes = useStyles();
  const [projectList, setProjectList] = useState([])

    useEffect(() => {
      axios.get(`${process.env.REACT_APP_API_URL}`)
      .then (res => {
        setProjectList(res.data)
      })
    });



  return (

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
            <IconButton size='small'><GitHubIcon className={classes.iconsize} />GitHub</IconButton>
            <IconButton size='small'><LinkedInIcon className={classes.iconsize} />LinkedIn</IconButton>
            <IconButton size='small'><ClassIcon className={classes.iconsize} />Kaggle</IconButton>
          </Grid>
          <Typography className={classes.text} variant="subtitle1" color="textSecondary" component="p">
            I have been programming in python for three years. Since one year I am interested in data science and machine learning.
            I am an engineer in physical sciences and currently in the middle of a master's degree in data science.
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            display="flex"
            className={classes.gridcard}
          >
                    {projectList.map(projectList => (
          <ProjectCard
            key={projectList.id}
            id={projectList.id}
            project_name={projectList.project_name}
            project_link={projectList.project_link}
            description={projectList.description}
             />
        ))}
          </Grid>
          <Grid container
            direction="row"
            justifyContent="center"
            alignItems="center"
            display="flex" >
            <Button className={classes.button} size="large" variant="outlined" color="primary" href="/projects">
              show more projects...
            </Button>
          </Grid>
        </Paper>
      </ThemeProvider>
    </div>

  );
}