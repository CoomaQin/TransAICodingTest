import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Button} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1,
    width: "70%"
  },
  toolbarSecondary: {
    justifyContent: 'space-evenly',
    width: "30%",
    overflowX: 'auto',
    // border: "2px solid",

  },
  linkContainerSelected: {
    backgroundColor: '#FAEBD7',

  },
  linkContainer: {
    backgroundColor: 'white',

  },
  toolbarBtn: {
    padding: theme.spacing(1),
    flexShrink: 0,
    fontSize: 20,
    border: "2px solid",
    color: theme.palette.text.main,
    backgroundColor: "black"
    
  },
  text: {
    color: theme.palette.text.main
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          classes={{colorPrimary: classes.text}} 
          color="primary"
          component="h2"
          variant="h5"
          align="center"
          className={classes.toolbarTitle}
        >
          {"Huixiong Qin"}
        </Typography>
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          {sections.map((section) => (
            <div className={section.selected ? classes.linkContainerSelected : classes.linkContainer} border={2}>
              <Button
                variant="outlined"
                color="primary"
                key={section.title}
                broder={4}
                href={section.url}
                className={classes.toolbarBtn}
              >
                {section.title}
              </Button>
            </div>
          ))}
        </Toolbar>

      </Toolbar>

    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};