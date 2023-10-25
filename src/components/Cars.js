import React from 'react';
import {Car} from "./Car";

const Cars = ({cars,setUpdateCar,setRefreshed}) => {

    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car} setUpdateCar={setUpdateCar} setRefresher={setRefreshed}/>)}
        </div>
    );
};

export {Cars};