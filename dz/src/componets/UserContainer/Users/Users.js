import React, { useEffect, useState} from 'react';

// --------
import { userService } from '../../service/userService';
import User from '../User/User';
import  UserDetails  from '../UserDetails/UserDetails';
import css from '../Users/Users.module.css'; 



// import { axiosService } from '../../service/axiosService';
// import { urls } from '../../constants/constants';

//---------
const Users = () => {

    // const state = useState([]);
    // const [users, setUsers] = state;
    const [users, setUsers] = useState([]);
    const [userDetails, setUserDetails] = useState(null);


    useEffect(() => {
        // userService.getAll()
        //     .then (value => value.data)
        //     .then (value => setUsers(value))
        // }, [])

        userService.getAll()
            .then (({data}) => setUsers(data))
        }, [])

        const getCurrentUser = (user) => {
            setUserDetails(user)
        };

    return (
        <div className={css.Users}>
            {users.map(user => <User user={user} key={user.id} getCurrentUser={getCurrentUser}/> )}
            
            {userDetails!=null && <UserDetails userDetails={userDetails}/>}

        </div>
    )
};

export default Users;
