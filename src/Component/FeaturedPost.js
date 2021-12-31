import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    border: "0.2rem solid",
    borderColor: "black",
    position: 'relative',
    backgroundImage: props => `url(${props.bgImg})`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: 'black',
    width: "36rem",
    height: "18rem",
    transition: "background-size 1s",
    '&:hover': {
      backgroundSize: "120%",
    },
    marginRight: "0.5rem",
    marginLeft: "0.5rem",
    marginBottom: "1rem"
  },
  card: {
    // border: "0.2rem solid",
    // borderColor: "black",
  },
  // titleContainer: {
  //   marginBottom: "0.5rem",
  //   marginTop: "0.5rem",
  //   width: "8rem",
  // },
  tag: {
    color: theme.palette.text.tag
  },
  title: {
    color: theme.palette.text.title,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    textAlign: "center",


  },
  loc: {
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

export default function FeaturedPost (props) {
  const post = props.post;
  const classes = useStyles({ bgImg: post.img });
  // let [bgSize, setBgSize] = useState(100);

  return (
    <Paper className={classes.paper}>
      <Grid item xs={12} md={6}>
        <CardContent className={classes.card}>
          <Typography className={classes.title} component="h2" variant="h5" color="primary">
            {post.title}
          </Typography>
          <Typography className={classes.loc} variant="subtitle1">
            {post.date.toString()}
          </Typography>
          <Typography className={classes.loc} variant="subtitle1">
            {post.location}
          </Typography>
        </CardContent>
        <Button size="small" className={classes.btn} href={post.path}>Learn More</Button>
      </Grid>
    </Paper>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};