import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles((theme) => ({
  dyBg: {
    backgroundImage: props => `url(${props.bgImg})`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: 'black',
    transition: "background-size 1s",
    '&:hover': {
      backgroundSize: "120%",
    }
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    border: "0.2rem solid",
    backgroundColor: "black",
    position: 'relative',
    width: "36rem",
    height: "18rem",
    marginRight: "0.5rem",
    marginLeft: "0.5rem",
    marginBottom: "1rem"
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
  featuredPostContent: {
    // border: "1rem solid blue",
    backgroundColor: "black",
    position: 'absolute',
    width: "100%",
    height: "100%",
    color: 'white',
  },
  overlay: {
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
    width: "18rem",
    marginBottom: "0.5rem",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  tag: {
    marginRight: "1rem",
    color: theme.palette.text.tag
  },
  title: {
    color: theme.palette.text.title,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    textAlign: "center",
  },
  date: {
    marginTop: "0.5rem",
    color: theme.palette.text.main,
    width: "10rem",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
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

export default function FeaturedPost(props) {
  const post = props.post;
  let [paperZIndex, setPaperZIndex] = useState(5);
  const classes = useStyles({ bgImg: post.img, paperZIndex: paperZIndex });
  return post.type == "image" ? (
    <Paper className={[classes.container, classes.dyBg].join(' ')}>
      <Grid container className={classes.textContainer}>
        <div className={classes.tagsContainer} md={12}>
          {post.hashTags.map((t, i) => (
            <Typography variant="p" color="inherit" paragraph className={classes.tag} key={i}>
              {t}
            </Typography>
          ))}
        </div>
        <Typography className={classes.title} component="h2" variant="h5" color="primary">
          {post.title}
        </Typography>
        <Typography className={classes.date} variant="subtitle1">
          {post.date.toString()}
        </Typography>
        <Button variant="text" size="small" className={classes.btn} href={post.path}>Learn More</Button>
      </Grid>
    </Paper>
  ) : (
    <Card className={classes.container} onMouseEnter={e => setPaperZIndex(0)} onMouseLeave={e => setPaperZIndex(5)}>
      <Grid container className={classes.wrapper} >
        <CardMedia
          className={classes.media}
          component="iframe"
          src={post.video}
        />
        <Grid container className={classes.featuredPostContent}>
          <Paper className={classes.overlay} />
          <Grid container className={classes.textContainer}>
            <div className={classes.tagsContainer} md={12}>
              {post.hashTags.map((t, i) => (
                <Typography variant="p" color="inherit" paragraph className={classes.tag} key={i}>
                  {t}
                </Typography>
              ))}
            </div>
            <Typography className={classes.title} component="h2" variant="h5" color="primary">
              {post.title}
            </Typography>
            <Typography className={classes.date} variant="subtitle1">
              {post.date.toString()}
            </Typography>
            <Button variant="text" size="small" className={classes.btn} href={post.path}>Learn More</Button>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  )
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};