import React, { useState } from 'react';
import axios from 'axios';
import Post from '../Post/Post';


const Posts = () => {
    console.log ("Posts")

    const [posts, setPosts] = useState([]);

    axios('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json))

    return (
        <div>
            {posts.map(post => <Post post={post} key={post.postid}/> )}
        </div>
    );
};

export default Posts;

