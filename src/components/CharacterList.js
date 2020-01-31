import React, { useEffect, useState } from "react";
import axios from 'axios';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/core/Icon';
import KeyboardArrowRight from '@material-ui/core/Icon';

import Header from './Header';
import SearchForm from "./SearchForm";

const CharacterList = props => {
  const [characters, setCharacters] = useState();

  const currentPage = props.currentPage;
  const characterName = props.character;

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    grid: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }));

  const classes = useStyles();
  const theme = useTheme();

  const [maxSteps, setMaxSteps] = useState(0);

  const setPage = (num) => {
    let update = props.setCurrentPage;
    update(num);
  }

  useEffect(() => {
    if(characterName !== undefined) {
      axios.get(`https://rickandmortyapi.com/api/character/?`, {
        params: {
          page: currentPage,
          name: characterName
        }
      })
        .then(function (res){
          console.log(res.data.results)
          setCharacters(res.data.results);
          setMaxSteps(res.data.info.pages);
        })
    } else {
      axios.get(`https://rickandmortyapi.com/api/character/?`, {
        params: {
          page: currentPage
        }
      })
        .then(function (res){
          console.log(res.data.results)
          setCharacters(res.data.results);
          setMaxSteps(res.data.info.pages);
        })
    }
  }, [currentPage, characterName]);


  const handleNext = () => {
    setPage(currentPage + 1);
  };

  const handleBack = () => {
    console.log(currentPage);
    setPage(currentPage - 1);
  };

  return (
    <div className={classes.root}>
      <Header currentPage={currentPage}/>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={currentPage - 1}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={currentPage === maxSteps}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={currentPage === 1}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
      <SearchForm setCharacter={props.setCharacter}/>
      <div className={classes.grid}>
      {/* {Need to add CharacterCard} */}
      </div>
      </div>
  );
}

export default CharacterList;