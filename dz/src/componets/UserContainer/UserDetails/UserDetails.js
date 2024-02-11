import React from 'react';

const UserDetails = ({userDetails}) => {
    const {id} = userDetails;
    return (
        <div>
            <div> id: {id} </div>
            {/* <div> name: {name} </div>
            <div> username: {username} </div>
            <div> email: {email}</div> */}
        </div>
    );
};

export default UserDetails;
