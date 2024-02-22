import React, { useEffect, useState } from 'react';
import postService from '../../service/postService';
import Posts from './Posts';
import PostForm from './PostForm';


const PostsContainer = () => {

const [posts, setPosts] = useState([]);

useEffect(() => {
postService.getAll().then(({data}) => setPosts(data))}, [] );

    return (
        <div>
            <PostForm/>
            <hr></hr>
            <Posts posts = {posts} />
        </div>
    );
    };

export default PostsContainer;