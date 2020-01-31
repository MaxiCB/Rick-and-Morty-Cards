import React, { useState } from "react";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    width: 275,
    height: 520,
    backgroundColor: "#FCFCFD",
    margin: "20px",
    boxShadow: '3px 3px 3px 3px #555'
  },
  media: {
    height: 240,
    width: 240,
    margin: "0 auto"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  button: {
    margin: "0 auto"
  }
});

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    textAlign: 'center'
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

export default function CharacterCard(props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    console.log(props);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  const created = new Date(props.created);

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {'Species: ' + props.species}
          </Typography>
          <Typography variant="h5" component="h2">
            {props.name}
          </Typography>
          <CardMedia
            className={classes.media}
            image={props.image}
            title={props.name + "Image"}
          />
          <Typography className={classes.pos} color="textSecondary">
            {'Gender: ' + props.gender}
          </Typography>
          <Typography variant="body2" component="p">
            {'Status: ' + props.status}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" color='primary' size="small" className={classes.button} onClick={handleOpen}>
            Show More
          </Button>
        </CardActions>
      </Card>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {props.id + ': ' + props.name}
        </DialogTitle>
        <DialogContent dividers>
        <CardMedia
            className={classes.media}
            image={props.image}
            title={props.name + "Image"}
          />
          <Typography gutterBottom>
            {'Origin: ' + props.origin.name}
          </Typography>
          <Typography gutterBottom>
            {'Location: ' + props.location.name}
          </Typography>
          <Typography gutterBottom>
            {'Created: ' + created.toDateString()}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary" className={classes.button}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
