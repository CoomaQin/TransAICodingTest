import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../Component/theme';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import Container from '@material-ui/core/Container';
import MainFeaturedPost from '../Component/MainFeaturedPost';
import Grid from '@material-ui/core/Grid';
import  mockData from '../data/mock.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
        flexDirection: 'row',
    },
    mainPost: {
        marginBottom: '40%',
        marginTop: "2%"
    }
}));


const sections = [
    { title: 'Home', url: '/', selected: true },
    { title: 'About', url: '/about', selected: false },
];

export default function Home() {
    const classes = useStyles();
    console.log(mockData)

    return (
        <ThemeProvider theme={theme}>
            <Header title="Location Finder" sections={sections} />
            <CssBaseline />
            <Container className={classes.mainPost}>
                <MainFeaturedPost post={mockData.post[0]} />
            </Container>
            <Footer title="Footer" description="Thank you for your visit!" />
        </ThemeProvider>
    )
};
