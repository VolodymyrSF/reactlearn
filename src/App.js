import React from 'react';
import {Simpsons} from "./components/simpsons";
import {RickAndMortyApi} from "./components/RickAndMortyApi";
const App = () => {
    return (
        <div>
            <h2>--------------------- TASK WITH SIMPSONS -----------------</h2>
            <Simpsons/>
            <h2>--------------------- TASK WITH RICK -----------------------</h2>
            <RickAndMortyApi/>
        </div>
    );
};

export {App};