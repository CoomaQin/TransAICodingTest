import Main from '../Component/Main';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../Component/theme';

export default function Markdown (props) {
  const [post, setPost] = useState("")
  useEffect(async () => {
    const result = await axios(props.url);
    setPost(result.data);
  })
  return (
    <ThemeProvider theme={theme}>
      <Main title="From the firehose" posts={[post]} images={props.images}/>
    </ThemeProvider>
    )
}