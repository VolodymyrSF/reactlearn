import React, {useEffect, useState} from 'react';
import {RickAndMortyStructure} from "./RickAndMortyStructure";

const RickAndMortyApi = () => {
    const [characters,setCharacters]=useState([])
    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6')
            .then(value => value.json())
            .then(person=>setCharacters(person))
    },[])
    return (
        <div>
            {characters.map(hero=><RickAndMortyStructure key={hero.id} prop={hero}/>)}
        </div>
    );
};

export {RickAndMortyApi};