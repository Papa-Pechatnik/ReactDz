import React from 'react';

const Post = ({post}) => {
const {id, byId, titel, body} = post;
    return (
<ul>
    <li> id: {id} </li>
    <li> byId: {byId} </li>
    <li> titel: {titel} </li>
    <li> body: {body} </li>
</ul>
    );
};

export default Post;