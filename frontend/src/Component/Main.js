import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  projTitle: {
    fontWeight: 'bold'
  },
  PosSubtitle: {
    fontStyle: 'italic'
  }
}));

export default function Main(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={8}>
      <Typography id="experience" variant="h4" gutterBottom >
        Experience
      </Typography>
      <Divider />
      <Typography variant="subtitle1" className={classes.projTitle}>
        Guangzhou RC Software Technology Co., LTD
      </Typography>
      <Typography variant="subtitle1" className={classes.PosSubtitle}>
        Software Engineer Intern
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        Jun 2018 - Aug 2018
      </Typography>
      <Typography variant="body1" gutterBottom>
        My tasks were to implement certain functions into an existent online monitoring system for vehicles in .NET framework.
        In the front end, I worked with a team of other five technicians on data visualization and Web design. In the back end,
        I independently implemented the vehicles-tracker function and set up a data server.
      </Typography>
      <Typography variant="body1">
        To manage over 500 gigabyte GPS data, I used Aliyun Table Store (a cloud service) to store them and imple- mented a socket-based
        service to share these data with SQL database. It reduced the requirement of servers’ resources, improving the efficiency of the
        read and write by batching.
      </Typography>
      <br></br>
      <Typography variant="subtitle1" className={classes.projTitle}>
        Sichuan University
      </Typography>
      <Typography variant="subtitle1" className={classes.PosSubtitle}>
        Undergraduate Research Intern at Statistical Research Center
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        Nov 2018 - May 2019
      </Typography>
      <Typography variant="body1" gutterBottom>
        My research was to use image recognition to assess property loss in traffic accidents. I built a CNN-based model with semi-supervised
        embeddings for recognizing exterior components of vehicles.
      </Typography>
      <Typography variant="body1">
        Supervised by Prof. Yingtin Luo, I evaluate the model using mocked data and tried to improve the model by extending the hidden layer,
        adjusting hyperprameters and techniques of labeling. I also attend seminars for undergraduate students as a Teaching Assistant, teaching
        the implementation of machine learning algorithms.
      </Typography>
      <br></br>
      <Typography variant="subtitle1" className={classes.projTitle}>
        Rutgers University
      </Typography>
      <Typography variant="subtitle1" className={classes.PosSubtitle}>
        MS Programmer at Computer Science Department
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        Sep 2019 - Present
      </Typography>
      <Typography variant="body1" gutterBottom>
        Maintain the MS portal: improving the user interface, implementing robuster Apis and fixing bugs.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Developed the ”checker” and ”tracker” functionalitie that simplify daily administrative processes.
      </Typography>
      {/* <Typography variant="body1">
        Refactored a part of the backend of the portal (was built in the JAVA servlet framework) with JAVA Springboot.
      </Typography> */}
      <Link display="block" variant="subtitle1" href={'https://ms.cs.rutgers.edu/'} key={'3'}>
        Check the portal for more details...
        </Link>

      <Typography id="project" variant="h4" gutterBottom style={{ marginTop: 50 }}>
        Project
      </Typography>
      <Divider />
      <Typography variant="subtitle1" className={classes.projTitle}>
        Multi-hop HF Radio Propagation (2018 MCM, Meritorious Winner)
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        Jan 2018
      </Typography>
      <Typography variant="body1" gutterBottom>
        Proposed assumptions to simplify the problem. Simulated the sea surface in MATLAB, using numerical methods to estimate the attenuation
        rate of HF radio’s reflection in sea. Wrote a paper of our work by LaTeX. This model was able to explain the fact that HF radio signal
        would be unstable in extreme weather conditions. As the team leader, I organized the work, assigned tasks to team members, and planned
        and monitored work progress. At last, we won 2018 MCM Meritorious Winner award.
      </Typography>
      <br></br>
      <Typography variant="subtitle1" className={classes.projTitle}>
        Tour Tod Travel Mobile App
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        Dec 2019 - Feb 2020
      </Typography>
      <Typography variant="body1" gutterBottom>
        The app is designed to provide travel services. Its main functionalities contain a user system, bus, hotel and ticket booking components,
        supporting online payment and digital coupon. Based on MCV pattern, we implemented the model using Mongoose. Controllers were implemented
        using NodeJS while front-end views are built using React Native. We also wrote overwhelming test scripts using ChaiJS to maintain the
        security of the system after any update. we made effort to solve some technical compatibility issues between android and ios in React Native
        framework, incluing extending the default date selector and variables caching and local storing.
      </Typography>
      <Link display="block" variant="subtitle1" href={'https://tourtod.com/'} key={'1'}>
        Check the website for more details...
        </Link>
      <Link display="block" variant="subtitle1" href={'https://apps.apple.com/us/app/tourtod/id1501449859'} key={'2'}>
        Find it on App Store...
        </Link>
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};