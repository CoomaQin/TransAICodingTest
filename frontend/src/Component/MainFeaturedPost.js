import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useInterval from '../utility/hook';


const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    height: "20rem",
    marginBottom: "1rem"
  },
  mainFeaturedPostContainer: {
    border: "2rem solid",
    borderColor: props => props.broderColor,
  },
  tagsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    height: "1.5rem"
  },
  tag: {
    marginRight: "1rem",
    color: "purple"
  },
  title: {
    margin: "2rem",
  },
  subtitle: {
    color: "blue"
  }
}));

export default function MainFeaturedPost(props) {

  let [bcr, setBcr] = useState(255);
  let classes = useStyles({ broderColor: `rgba(${bcr}, 0, 0, 1)` });
  const { post } = props;

  useInterval(() => {
    setBcr((bcr + 10) % 256)
  }, 100)

  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${post.img})` }}>
      {<img style={{ display: 'none' }} src={post.img} alt={post.imageText} />}
      <div className={classes.overlay} />
      <Grid >
        <Grid container className={classes.mainFeaturedPostContainer} color="red">
          <Grid container md={12} className={classes.mainFeaturedPostContent} justify="flex-end" direction="column">
            <div container className={classes.tagsContainer}>
              {post.hashTags.map(t => (
                <Typography variant="h8" color="inherit" paragraph className={classes.tag}>
                  {t}
                </Typography>
              ))}
            </div>
            <Typography component="h3" variant="h4" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            <div container className={classes.tagsContainer}>
              <Typography variant="h6" color="inherit" paragraph className={classes.subtitle} style={{ marginRight: "2rem" }}>
                {post.location}
              </Typography>
              <Typography variant="h6" color="inherit" paragraph className={classes.subtitle} >
                {post.date.toString()}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};