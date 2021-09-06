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
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: "36rem",
    transition: "background-size 1s",
    '&:hover': {
      backgroundSize: "120%",
   },
  },
  card: {
    // border: "0.2rem solid",
    // borderColor: "black",
  },
  tag: {
    color: theme.palette.text.tag
  },
  title: {
    color: theme.palette.text.title
  },
  loc: {
    color: theme.palette.text.main
  },
  btn: {
    color: "white"
  }
}));

export default function FeaturedPost (props) {
  const classes = useStyles();
  const post = props.post;
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
        <CardActionArea component="a" href="#" >
          <Button size="small" className={classes.btn}>Learn More</Button>
        </CardActionArea>
      </Grid>
    </Paper>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};