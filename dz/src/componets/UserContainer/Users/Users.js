import React, { useEffect, useState } from 'react';
import User from '../User/User';

const Users = () => {

    const state = useState([]);
    const [users, setUsers] = state;

    useEffect(() => {
        fetch ("https://jsonplaceholder.typicode.com/users")
        .then (value => value.json())
        .then (value => setUsers(value))
    }, [])
       
    return (
        <div>
            {/* {console.log(users)} */}
            {users.map(user => <User user={user} key={user.id}/> )}
        </div>
    );
};

export default Users;
