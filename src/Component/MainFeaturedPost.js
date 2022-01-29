import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useInterval from '../utility/hook';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles((theme) => ({
  mainFeaturedPostContainer: {
    position: "relative",
    height: "30rem",
    backgroundColor: "rgba(0, 0, 0, 0)",
    marginBottom: theme.spacing(4),
    border: "2rem solid",
    borderImageSlice: 1,
    borderImageSource: props => `linear-gradient(to left, rgba(${255 - props.broderColor}, 30, 225, 1), rgba(${props.broderColor}, 30, 225, 1))`,
  },
  wrapper: {
    width: "100%",
    height: "100%",
  },
  media: {
    // position: "relative",
    backgroundColor: "black",
    border: "1px solid black",
    zIndex: 5
  },
  mainFeaturedPostContent: {
    // border: "1rem solid blue",
    backgroundColor: "black",
    position: 'absolute',
    width: "100%",
    height: "100%",
    color: 'white',
  },
  paper: {
    // border: "1rem solid white",
    position: 'absolute',
    backgroundImage: props => `url(${props.bgImg})`,
    backgroundSize: '100%',
    backgroundPosition: 'center',
    width: "100%",
    height: "100%",
    zIndex: props => props.paperZIndex
  },
  textContainer: {
    // border: "1rem solid white",
    bottom: 10,
    left: 10,
    position: 'absolute',
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'flex-end',
    zIndex: 10
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
    justifyContent: "flex-start",
    height: "2rem",
    width: "8rem",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  title: {
    color: "white",
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

export default function MainFeaturedPost(props) {
  const { post } = props;
  let [bcr, setBcr] = useState(80);
  let [bflag, setBflag] = useState(true);
  let [paperZIndex, setPaperZIndex] = useState(5);
  let classes = useStyles({ broderColor: bcr, bgImg: post.img, paperZIndex: paperZIndex });
  // contorl dynamic linear gradient broder
  useInterval(() => {
    setBcr(bflag ? bcr + 10 : bcr - 10)
    if ((bcr == 220) || (bcr == 80)) {
      setBflag(!bflag)
      setBcr(bflag ? 210 : 90)
    }
  }, 100)

  return (
    <Card className={classes.mainFeaturedPostContainer} color="red" onMouseEnter={e => setPaperZIndex(0)} onMouseLeave={e => setPaperZIndex(5)}>
      <Grid container className={classes.wrapper} >
        <CardMedia
          className={classes.media}
          component="iframe"
          src={post.video}
        />
        <Grid container className={classes.mainFeaturedPostContent}>
          <Paper className={classes.paper} />
          <Grid container className={classes.textContainer}>
            <div className={classes.tagsContainer} md={12}>
              {post.hashTags.map((t, i) => (
                <Typography variant="h6" color="inherit" paragraph className={classes.tag} key={i}>
                  {t}
                </Typography>
              ))}
            </div>
            <div className={classes.titleContainer} md={12}>
              <Typography component="h3" variant="h4" color="inherit" gutterBottom className={classes.title}>
                {post.title}
              </Typography>
            </div>
            <div className={classes.locationContainer}>
              <Typography variant="h6" color="inherit" paragraph className={classes.subtitle} >
                {post.date.toString()}
              </Typography>
            </div>
            <Button variant="text" size="small" className={classes.btn} href={post.path}>Learn More</Button>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};