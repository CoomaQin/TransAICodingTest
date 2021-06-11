import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Main from '../Component/Main';
import theme from '../Component/theme';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MainFeaturedPost from '../Component/MainFeaturedPost';
import Sidebar from '../Component/Sidebar';
import Grid from '@material-ui/core/Grid';
import FeaturedPost from '../Component/FeaturedPost';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const mainFeaturedPost = {
  title: 'Huixiong Qin',
  email: "Email: coomafine@gmail.com",
  phone: "phone: (732) 763-5492",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: '',
};
const sections = [
  { title: 'Home', url: '/', selected: false },
  { title: 'About', url: '/about', selected: true },
];

const feature = [
  {
    title: 'Sichuan University',
    date: 'Sep 2015 - Jun 2019',
    location: 'Chengdu, CN',
    description:
      'Bachelor of Science in Mathematics (GPA: 3.5/4.0)',
    image: 'https://i.loli.net/2020/04/28/ZBu6spraRl5tzoG.png',
    imageText: 'Image Text',
  },
  {
    title: 'Rutger University',
    date: 'Sep 2019 - Jun 2021 (expected)',
    location: 'New Brunswich, US',
    description:
      'Master of Science in Computer Science (GPA: 3.83/4.0)',
    image: 'https://i.loli.net/2020/04/28/srKym4XkB7zIVix.png',
    imageText: 'Image Text',
  },
];

const sidebar = {
  languageTle: 'Languages',
  languageDes:
    'Python, Javascript, MATLAB, C#, SQL, LaTeX, Java, C++.',
  techTle: 'Technologies',
  techDes:
    'HTML, CSS, React, React Native, .NET, NodeJS, MongoDB, NumPy, Scikit-learn, TensorFlow.',
  archives: [
    { title: 'Education', url: '#education' },
    { title: 'Experience', url: '#experience' },
    { title: 'Project', url: '#project' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/CoomaQin', color: 'warning' },
    { name: 'LinkedIn', icon: LinkedInIcon, url:'https://www.linkedin.com/in/cooma-qin-2980a41a3/', color: 'primary' },
  ],
};


export default function About() {

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Header title="Location Finder" sections={sections} />
      <CssBaseline />
      <Container>
        <MainFeaturedPost post={mainFeaturedPost} />
        <Typography variant="h4" gutterBottom id="education">
          Education
          </Typography>
        <Grid container spacing={4}>
          {feature.map((post) => (
            <FeaturedPost key={post.title} post={post} />
          ))}
        </Grid>
        <Grid container spacing={5} className={classes.mainGrid}>
          <Main />
          <Sidebar
            languageTle={sidebar.languageTle}
            techTle={sidebar.techTle}
            languageDes={sidebar.languageDes}
            techDes={sidebar.techDes}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>
      </Container>
      <Footer title="Footer" description="Thank you for your visit!" />
    </ThemeProvider>
  )
}