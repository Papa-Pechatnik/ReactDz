import React from 'react';


const Post = ({post, getCurrentPosts}) => {
    const {id, title} = post;



    return (
        <div>
            <div> id: {id}</div>
            <div> title: {title}</div>
            <button onClick={()=>getCurrentPosts(post)}> Кнопка { id }</button>
           
        </div>
    );
};

export default Post;