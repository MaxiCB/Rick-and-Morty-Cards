import React from "react";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

export default function Header() {

  const useStyles = makeStyles(theme => ({
    link : {
      textDecoration: 'none',
    },
    button: {
      margin: '10px'
    },
    root: {
      flexGrow: 1,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.primary,
    }
  }));

  const classes = useStyles();

  return (
    <header className="ui centered">
      <h1 className={classes.root}>Rick & Morty Fan Page</h1>
      <Link to='/' className={classes.link}><Button variant="outlined" color="primary" className={classes.button}>Home</Button></Link>
    </header>
  );
}