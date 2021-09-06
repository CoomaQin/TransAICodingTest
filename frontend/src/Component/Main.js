import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Markdown from './mdOverride';
import Sidebar from './Sidebar';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles((theme) => ({
    markdown: {
        ...theme.typography.body2,
        padding: theme.spacing(3, 0),
        color: theme.palette.text.main,
    },
    screen: {
        // border: "0.5rem solid",
        // borderColor: "#C236F2",
        backgroundImage: theme.background.image,
        display: "flex",
        flexDirection: "row",
    },
    title: {
        color: theme.palette.common.white
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    media: {
        width: "60%",
        paddingTop: '56.25%', // 16:9,
        marginBottom: '30px'
    }

}));

const images = ["https://source.unsplash.com/random", "https://source.unsplash.com/random"]

const sidebar = {
    title: 'About',
    description:
        'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
    archives: [
        { title: 'March 2020', url: '#' },
        { title: 'February 2020', url: '#' },
        { title: 'January 2020', url: '#' },
        { title: 'November 1999', url: '#' },
        { title: 'October 1999', url: '#' },
        { title: 'September 1999', url: '#' },
        { title: 'August 1999', url: '#' },
        { title: 'July 1999', url: '#' },
        { title: 'June 1999', url: '#' },
        { title: 'May 1999', url: '#' },
        { title: 'April 1999', url: '#' },
    ],
    social: [
        { name: 'GitHub', icon: GitHubIcon },
        { name: 'Twitter', icon: TwitterIcon },
        { name: 'Facebook', icon: FacebookIcon },
    ],
};

export default function Main (props) {
    const classes = useStyles();
    const { posts, title } = props;

    return (
        <Paper className={classes.screen}>
            <Grid item xs={12} md={9}>
                <Typography variant="h3" gutterBottom className={classes.title}>
                    {title}
                </Typography>
                <Divider />
                {posts.map((post) => (
                    <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                        {post}
                    </Markdown>
                ))}
                {/* pictures go here */}
                <Grid container justifyContent={"center"}>
                    {images.map((img) => (<CardMedia className={classes.media} image={img} />))}
                </Grid>
            </Grid>
            <Grid item xs={3} md={3}>
                <Sidebar
                    title={sidebar.title}
                    description={sidebar.description}
                    archives={sidebar.archives}
                    social={sidebar.social}
                />
            </Grid>
        </Paper>
    );
}

Main.propTypes = {
    posts: PropTypes.array,
    title: PropTypes.string,
};