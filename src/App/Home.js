import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../Component/theme';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import Container from '@material-ui/core/Container';
import MainFeaturedPost from '../Component/MainFeaturedPost';
import FeaturedPost from '../Component/FeaturedPost';
import postData from '../data/metadata.js';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, CssBaseline, Grid, Divider } from '@material-ui/core';


const useStyles = makeStyles(({ theme }) => ({
    screen: {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: "url(https://i.loli.net/2021/09/18/PzBL3GxMRydYEIm.jpg)",
    },
    body: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'space-between',
        // borderTop: "0.5rem solid",
        // borderColor: "#C236F2",
    },
    mainPost: {
        marginBottom: '2%',
        marginTop: "2%",
    },
    baseLine: {
        backgroundColor: "#C236F2"
    }
}));


const sections = [
    { title: 'Home', url: '/', selected: true },
    // { title: 'Test', url: '/markdown', selected: false },
];

export default function Home() {
    const classes = useStyles();
    let featuredPost = []
    featuredPost = postData.post.splice(1, postData.post.length).map((p, i) => <FeaturedPost post={p} key={i} />)
    return (
        <ThemeProvider theme={theme}>
            <Paper className={classes.screen}>
                <Header title="Huixiong Qin" sections={sections} />
                <CssBaseline />
                {/* overide backgoundColor of Divider.root */}
                <Divider classes={{ root: classes.baseLine }} />
                <Container className={classes.body} >
                    <Container className={classes.mainPost}>
                        <MainFeaturedPost post={postData.post[0]} />
                    </Container>
                    <Grid className={classes.featuredPost} container direction="row" justifyContent="center" alignItems="center">
                        {featuredPost}
                    </Grid>
                </Container>
                <Divider classes={{ root: classes.baseLine }} />
                <Footer title="That's it so far.." description="Thank you for your visit!" />
            </Paper>
        </ThemeProvider>
    )
};
