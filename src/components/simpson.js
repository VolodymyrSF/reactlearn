import React from 'react';
const Simpson = ({inform}) => {
    const {name,surname,age,info,photo}=inform
    return (
        <div>
            <h2>name:{name} {surname}</h2>
            <h3>Age:{age}</h3>
            <p>Info about user:{info}</p>
            <img src={photo}/>
        </div>
    );
};

export  {Simpson};