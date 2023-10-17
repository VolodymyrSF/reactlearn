import React from 'react';


const RickAndMortyStructure = ({prop}) => {
    console.log(prop)
    const {id,name,status,species,type,gender,image}=prop
    return (
        <div>
            <h2>name:{name}</h2>
            <h3>id:{id} </h3>
            <h3>status:{status}</h3>
            <h3>species:{species}</h3>
            <h3>type:{type}</h3>
            <h3>gender:{gender}</h3>
            <img src={image}/>
        </div>
    );
};

export  {RickAndMortyStructure};