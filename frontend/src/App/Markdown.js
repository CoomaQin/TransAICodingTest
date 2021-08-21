import Main from '../Component/Main';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function Markdown () {
    const [post, setPost] = useState("")
    useEffect(async () => {
        const result = await axios(
          'https://raw.githubusercontent.com/mui-org/material-ui/master/docs/src/pages/getting-started/templates/blog/blog-post.1.md',
        );
        setPost(result.data);
      })
    return (<Main title="From the firehose" posts={[post]} />)
}