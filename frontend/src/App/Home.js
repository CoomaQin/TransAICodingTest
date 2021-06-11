import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../Component/theme';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import Container from '@material-ui/core/Container';
import MainFeaturedPost from '../Component/MainFeaturedPost';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Map from '../Component/GoogleMap';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
        flexDirection: 'row',
      },
}));


const sections = [
    { title: 'Home', url: '/', selected: true },
    { title: 'About', url: '/about', selected: false },
];

const mainFeaturedPost = {
    title: 'Welcome to my location finder',
    description:
        "This is a front-end web application, as a part of Trans AI coding test.",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    linkText: '',
};

export default function Home() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Header title="Location Finder" sections={sections} />
            <CssBaseline />
            <Container style={{marginBottom: '40%'}}>
                <MainFeaturedPost post={mainFeaturedPost} />
                <Grid container spacing={0} className={classes.mainGrid}>
                    <Map />
                </Grid>
            </Container>
            <Footer title="Footer" description="Thank you for your visit!" />
        </ThemeProvider>
    )
};
