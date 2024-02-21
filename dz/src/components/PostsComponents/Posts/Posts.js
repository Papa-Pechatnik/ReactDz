import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
// import axios, { Axios } from "axios"
// import { axiosService } from '../../service/axiosService';
// import { urls } from '../../constants/constants';
import { postService } from '../../service/postsService';
import PostDetails from '../PostDetails/PostDetails';




const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [postDetails, setDetails] = useState(null);

    useEffect(() => {
    // axiosService(urls.posts.base)
    postService.getAll()
    .then(response => response.data)
    .then(json => console.log(setPosts(json)))
    }, [])

    const getCurrentPosts = (post) => {
        setDetails(post);
    }
    
    return (
        <div className='display'>
        <div className='grid'>
            {posts.map(post => <Post post={post} key={post.id} getCurrentPosts={getCurrentPosts}/> )}
            
        </div>

            {postDetails!=null && <PostDetails postDetails = {postDetails}/>}
          
        </div>

    );
};

export default Posts;

