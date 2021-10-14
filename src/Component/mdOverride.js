import React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Paper, Link, CssBaseline, Grid, Divider } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../Component/theme';


const styles = (theme) => ({
  listItem: {
    marginTop: theme.spacing(1),
  },
  title: {
    color: "#fff"
  }
});


const options = {
  overrides: {
    h1: {
      component: withStyles(styles)(({ classes, ...props }) => (
        <ThemeProvider  theme={theme}>
          <Typography gutterBottom variant={'h5'} className={classes.title} {...props} />
        </ThemeProvider>
      ))
    },
    h2: { component: Typography, props: { gutterBottom: true, variant: 'h6' } },
    h3: { component: Typography, props: { gutterBottom: true, variant: 'subtitle1' } },
    h4: {
      component: Typography,
      props: { gutterBottom: true, variant: 'caption', paragraph: true },
    },
    p: { component: Typography, props: { paragraph: true } },
    a: { component: Link },
    li: {
      component: withStyles(styles)(({ classes, ...props }) => (
        <li className={classes.listItem}>
          <Typography component="span" {...props} />
        </li>
      )),
    },
  },
};

export default function Markdown (props) {
  return (
    <ReactMarkdown options={options} {...props} />
  );
}