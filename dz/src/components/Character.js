import React from 'react';

const Character = ({character}) => {
    const {id, name, shortname, age, gender, status, foto} = character;
       return (
        <div>
            <ul>
                <li>id {id}</li>
                <li>name {name}</li>
                <li>short name {shortname}</li>
                <li>age {age}</li>
                <li>gender {gender}</li>
                <li>status {status}</li>
            </ul>
            <img src={foto} alt={name}>

            </img>
        </div>
    );
};

export default Character;