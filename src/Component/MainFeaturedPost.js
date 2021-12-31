import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useInterval from '../utility/hook';


const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: props => `url(${props.bgImg})`,
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
    height: "25rem",
    marginBottom: "1rem",
    paddingLeft: "3rem"
  },
  mainFeaturedPostContainer: {
    border: "2rem solid",
    borderImageSlice: 1,
    borderImageSource: props => `linear-gradient(to left, rgba(${255 - props.broderColor}, 30, 225, 1), rgba(${props.broderColor}, 30, 225, 1))`,
  },
  tagsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: "1.5rem",
    width: "14rem",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  tag: {
    marginRight: "1rem",
    color: theme.palette.text.tag,
    // border: "2px solid",
  },
  titleContainer: {
    marginBottom: "0.5rem",
    marginTop: "0.5rem",
    height: "3rem",
    width: "40rem",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  locationContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: "2rem",
    width: "18rem",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  title: {
    margin: "2rem",
  },
  subtitle: {
    color: theme.palette.text.main
  },
  btn: {
    color: "white",
    width: "6rem",
    marginTop: "0.5rem",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    '&:hover': {
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      color: "#0F0F1E",
    },
  }
}));

export default function MainFeaturedPost (props) {
  const { post } = props;
  let [bcr, setBcr] = useState(80);
  let [bflag, setBflag] = useState(true);
  let classes = useStyles({ broderColor: bcr, bgImg: post.img });
  // contorl dynamic linear gradient broder
  useInterval(() => {
    setBcr(bflag ? bcr + 10 : bcr - 10)
    if ((bcr == 220) || (bcr == 80)) {
      setBflag(!bflag)
      setBcr(bflag ? 210 : 90)
    }
  }, 100)

  return (
    <Paper className={classes.mainFeaturedPost}>
      {/* {<img style={{ display: 'none' }} src={post.img} alt={post.imageText} />} */}
      <div className={classes.overlay} />
      <Grid >
        <Grid container className={classes.mainFeaturedPostContainer} color="red">
          <Grid container className={classes.mainFeaturedPostContent} justifyContent="flex-end" direction="column">
            <div className={classes.tagsContainer} md={12}>
              {post.hashTags.map((t, i) => (
                <Typography variant="h8" color="inherit" paragraph className={classes.tag} key={i}>
                  {t}
                </Typography>
              ))}
            </div>
            <div className={classes.titleContainer} md={12}>
              <Typography component="h3" variant="h4" color="inherit" gutterBottom>
                {post.title}
              </Typography>
            </div>
            <div className={classes.locationContainer}>
              <Typography variant="h6" color="inherit" paragraph className={classes.subtitle} style={{ marginRight: "2rem" }}>
                {post.location}
              </Typography>
              <Typography variant="h6" color="inherit" paragraph className={classes.subtitle} >
                {post.date.toString()}
              </Typography>
            </div>
            <Button variant="text" size="small" className={classes.btn} href={post.path}>Learn More</Button>
          </Grid>
        </Grid>
      </Grid >
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};