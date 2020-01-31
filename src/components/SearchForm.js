import React from "react";

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

export default function SearchForm(props) {

  const updateName = (name) => {
    let update = props.setCharacter;
    update(name);
  }

  const useStyles = makeStyles(theme => ({
    root : {
      '& .MultiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

  const classes = useStyles();
 
  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <div>
        <TextField id="outlined-search" label="Search name" type="search" variant="outlined" onChange={e => updateName(e.target.value)}/>
      </div>
    </form>
  );
}
