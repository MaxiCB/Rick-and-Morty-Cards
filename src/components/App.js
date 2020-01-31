import React, {useState} from "react";
import { Route } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import WelcomePage from '../components/WelcomePage';
import CharacterList from '../components/CharacterList';

const App = props => {

  const [currentPage, setCurrentPage] = useState(1);

  const [character, setCharacter] = useState();

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.primary,
    }
  }));

  const classes = useStyles();


  return (
    <main className={classes.root}>
      <Route exact path='/' component={WelcomePage}/>
      <Route exact path='/characterList' render={(props) => <CharacterList {...props}
      currentPage={currentPage} setCharacter={setCharacter} character={character} setCurrentPage={setCurrentPage}/>}/>
    </main>
  );
}

export default App;
