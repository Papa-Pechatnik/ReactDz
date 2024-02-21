import React from 'react';

const PostDetails = ({postDetails}) => {
    const {userId, id, title, body} = postDetails;

    return (

            <ul>
                <li>userId:{userId}</li>
                <li>id:{id}</li>
                <li>title:{title}</li>
                <li>body:{body}</li>
            </ul>

    );
};

export default PostDetails;