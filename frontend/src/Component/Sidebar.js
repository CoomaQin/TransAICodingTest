import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { HashLink as Link } from 'react-router-hash-link';


const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
    color: theme.palette.text.main
  },
}));

export default function Sidebar(props) {
  const classes = useStyles();
  console.log(props)
  const { languageTle, techTle, languageDes, techDes, social, archives } = props;

  return (
    <Grid item>
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Side Navigator  
      </Typography>
      {archives.map((archive) => (
        <div>
          <a href={archive.url}>{archive.title}</a>
        </div>
      ))}
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Social
      </Typography>
      {social.map((network) => (
        <Link display="block" variant="body1" href={network.url} key={network} color={network.color}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};