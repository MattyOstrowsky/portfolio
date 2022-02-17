import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProjectCard from './projectCard';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';


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
      paddingBottom: '0rem',
      marginBottom: '10vw',
      marginTop: '10vw',
    },
  }
}));
export default function ProjectListPage() {
  const classes = useStyles();
  const [projectList, setProjectList] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/projects`)
      .then(res => {
        setProjectList(res.data)
      })
  });



  return (


    <Grid container direction="row" justifyContent="center" alignItems="center" className={classes.root} spacing={2}>
      <ThemeProvider theme={theme}>
        {projectList.map(projectList => (
          <ProjectCard
            key={projectList.id}
            id={projectList.id}
            project_name={projectList.project_name}
            project_link={projectList.project_link}
            description={projectList.description}
            image_url={projectList.image_url} />
        ))}
      </ThemeProvider>

    </Grid>


  );
}