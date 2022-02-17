import React from 'react';
import HamburgerMenu from './menuHamburger';
import { Hidden, AppBar, makeStyles } from '@material-ui/core';
import blueGrey from '@material-ui/core/colors/blueGrey';
import MenuBar from './menuBar';

const Primary = blueGrey[100];
const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  bar:{
    borderRadius: "205xp",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  linkButton: {
    fontFamily: 'Roboto',
    borderRadius: '25px',
    paddingLeft: '2vh',
    paddingRight: '2vh',
    color: Primary,
    size: 'small',
    '@media (min-width:600px)': {
      size: 'small',
    },
    [theme.breakpoints.up('md')]: {
      size: 'small',
    },

  },
  menu: {
    color: 'white',
    textAlign: 'right',
    alignItems: 'center',
  }
}));



export default function Header(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
     
        <AppBar  className={classes.bar} position="sticky"  color='transparent' >
          <Hidden smDown className={classes.menu}>
            <MenuBar />
          </Hidden>
          <Hidden mdUp className={classes.menu}>
            <HamburgerMenu />
          </Hidden>

        </AppBar>
  
    </div>
  );
}
