import React from 'react';

import {Posts} from "./components/Posts/Posts";
import {Starts} from "./components/Starts/Starts";
const App = () => {
    return (
        <div>
        <Posts/>

            <Starts/>
        </div>
    );
};

export {App};