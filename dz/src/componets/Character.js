import React, { useLayoutEffect } from 'react';

const Character = ({id,name,status,species,gender,image}) => {
    return (
        <div>
        <ul>
            <li>id: {id}</li>
            <li>name: {name}</li>
            <li>status: {status}</li>
            <li>species: {species}</li>
            <li>gender: {gender}</li>
        </ul>
        <img src={image} alt={name}>
        </img> 
        </div>
    );
};

export default Character;