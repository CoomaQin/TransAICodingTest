import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, SvgIcon } from '@material-ui/core';
import { ReactComponent as Logo } from "../images/logo.svg";


const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,

  },
  toolbarLogo: {
    // flex: 1,
    width: "50%",
    height: "5rem"
  },
  toolbarSecondary: {
    justifyContent: 'space-evenly',
    width: "40%",
    // border: "2px solid",

  },
  linkContainer: {

  },
  linkContainerSelected: {
    backgroundColor: '#FAEBD7',

  },
  linkContainerUnselected: {
    backgroundColor: 'white',
  },
  toolbarBtn: {
    fontSize: 12,
    border: `${theme.palette.text.main} 0.125rem solid`,
    color: theme.palette.text.main,
    boxShadow: `0 0 0.5rem 0 ${theme.palette.text.main}`,
    textShadow: '0 0 0.5em rgba(255,255,255,0.5)',
    backgroundColor: "#0F0F1E",
    '&:hover': {
      backgroundColor: theme.palette.text.main,
      color: "#0F0F1E",
      textShadow: "none",
      boxShadow: `0 0 1.2rem 0 ${theme.palette.text.main}`,
    },
  },
  text: {
    color: theme.palette.text.main
  }
}));

export default function Header (props) {
  const classes = useStyles();
  const { sections } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Logo className={classes.toolbarLogo} />
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          {sections.map((section, i) => (
            <div className={section.selected ? (classes.linkContainerSelected, classes.linkContainer) : (classes.linkContainerUnselected, classes.linkContainer)} key={i}>
              <Button
                variant="outlined"
                key={section.title}
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