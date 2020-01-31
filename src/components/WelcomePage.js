import React from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

export default function WelcomePage() {

  const useStyles = makeStyles(theme => ({
    root: {
      textDecoration: 'none'
    }
  }));

  const classes = useStyles();

  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
      <Link to='/characterList' className={classes.root}><Button variant="outlined" color="primary">Enter</Button></Link>
    </section>
  );
}