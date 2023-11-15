import React from 'react';
import {Cars} from "./components/Cars";
import {CarForm} from "./components";

const App = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            {<Cars/>}
        </div>
    );
};

export {App};