import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
  const classes = useStyles();
  return (
    <Typography classes={{colorPrimary: classes.text}} color="primary" variant="body2" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        HuixiongQin
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "transparent",
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
  text: {
    color: theme.palette.text.main
  }
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography classes={{colorPrimary: classes.text}} variant="h6" align="center" gutterBottom color="primary">
          {title}
        </Typography>
        <Typography classes={{colorPrimary: classes.text}} color="primary" variant="subtitle1" align="center" component="p">
          {description}
        </Typography>
        {/* <Copyright /> */}
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};