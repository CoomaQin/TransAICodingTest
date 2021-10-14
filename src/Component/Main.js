import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Markdown from './mdOverride';
import Header from './Header';
import Sidebar from './Sidebar';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import CardMedia from '@material-ui/core/CardMedia';
import postData from '../data/metadata';

const useStyles = makeStyles((theme) => ({
    markdown: {
        ...theme.typography.body2,
        padding: theme.spacing(3, 0),
        color: theme.palette.text.main,

    },
    body: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "2rem",
        marginLeft: "10rem",
        marginRight: "10rem"
    },
    screen: {
        // border: "0.5rem solid",
        // borderColor: "#C236F2",
        backgroundImage: theme.background,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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
        width: "90%",
        paddingTop: '56.25%', // 16:9,
        marginBottom: '30px'
    }

}));

const sections = [
    { title: 'Home', url: '/', selected: true },
    // { title: 'Test', url: '/markdown', selected: false },
];

const sidebar = {
    title: 'About',
    description:
        'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
    archives: postData.post.map(p => ({title: p.date, url: p.path})),
    social: [
        { name: 'GitHub', icon: GitHubIcon, to: "https://github.com/CoomaQin"},
    ],
};

export default function Main(props) {
    const classes = useStyles();
    const { posts, images } = props;
    console.log("images", images)
    
    return (
        <Paper className={classes.screen}>
            <Header title="Huixiong Qin" sections={sections} />
            <CssBaseline />
            <Grid container className={classes.body}>
                <Grid item xs={12} md={9}>
                    <Divider />
                    {posts.map((post, idx) => (
                        <Markdown className={classes.markdown} key={idx}>
                            {post}
                        </Markdown>
                    ))}
                    {/* pictures go here */}
                    <Grid container justifyContent={"center"}>
                        {images.map((img, idx) => (<CardMedia className={classes.media} image={img} key={idx}/>))}
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
            </Grid>
        </Paper>
    );
}

Main.propTypes = {
    posts: PropTypes.array,
    title: PropTypes.string,
};