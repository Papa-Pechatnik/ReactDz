import React from 'react';
import User from '../User/User';

const Users = () => {

    let users = [];

    fetch ("https://jsonplaceholder.typicode.com/")
    .then (value => value.json())
    .then (value => {users = value})
    
    return (
        <div>
        {console.log(users)}
            {users.map(user => <User user={user} key={user.id}/> )}
        </div>
    );
};

export default Users;
