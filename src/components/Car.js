import React from 'react';

import {useDispatch} from "react-redux";
import {carsActions} from "../redux/slices";

const Car = ({car}) => {
    const {id,brand,price,year}=car
    const dispatch = useDispatch;
    return (
        <div>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={()=>dispatch(carsActions.updateCar(car))}>update</button>
            <button>delete</button>
        </div>
    );
};

export  {Car};