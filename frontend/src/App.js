import './App.css';
import React from 'react';
import Header from './Components/header/header';
import Section from './Components/homePage/homePage';
import Photo from './Components/homePage/photo';
import ContactFormPage  from './Components/contactFormPage';
import '@fontsource/roboto';
import { makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProjectListPage from './Components/projectsPage/projectsListPage';
import MlModelPage from './Components/predictModelPage/mlModelPage';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0',
    padding: 0,
    color: '#fff',
    background: 'linear-gradient(0,#281130 50%,#030133)',
    minHeight: '100vh',
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Photo />
            <Section />
          </Route>
          <Route exact path="/projects">
            <ProjectListPage/>
          </Route>
          <Route exact path="/contact">
            <ContactFormPage/>
          </Route>
          <Route exact path="/strokemodel">
            <MlModelPage/>
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
