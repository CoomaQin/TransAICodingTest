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
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    transition: "background-size 1s",
    '&:hover': {
      backgroundSize: "120%",
    },
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
    borderImageSlice: 1,
    // borderImageSource: "linear-gradient(to left, red, orange)"
    borderImageSource: props => `linear-gradient(to left, rgba(${255 - props.broderColor}, 30, 225, 1), rgba(${props.broderColor}, 30, 225, 1))`,
  },
  tagsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    height: "1.5rem"
  },
  tag: {
    marginRight: "1rem",
    color: theme.palette.text.tag
  },
  title: {
    margin: "2rem",
  },
  subtitle: {
    color: theme.palette.text.main
  }
}));

export default function MainFeaturedPost (props) {

  let [bcr, setBcr] = useState(80);
  let [bflag, setBflag] = useState(true);
  let classes = useStyles({ broderColor: bcr });
  const { post } = props;

  // contorl dynamic linear gradient broder
  useInterval(() => {
    setBcr(bflag ? bcr + 10 : bcr - 10)
    if ((bcr == 220) || (bcr == 80)){
      setBflag(!bflag)
      setBcr(bflag ? 210 : 90)
    }
  }, 100)

  return (
    <Paper className={classes.mainFeaturedPost}>
      {<img style={{ display: 'none' }} src={post.img} alt={post.imageText} />}
      <div className={classes.overlay} />
      <Grid >
        <Grid container className={classes.mainFeaturedPostContainer} color="red">
          <Grid container className={classes.mainFeaturedPostContent} justifyContent="flex-end" direction="column">
            <div className={classes.tagsContainer} md={12}>
              {post.hashTags.map((t, i) => (
                <Typography variant="h6" color="inherit" paragraph className={classes.tag} key={i}>
                  {t}
                </Typography>
              ))}
            </div>
            <Typography component="h3" variant="h4" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            <div className={classes.tagsContainer}>
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