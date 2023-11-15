import React from 'react';

import {useDispatch} from "react-redux";
import {carsActions} from "../redux/slices";
import {carsService} from "../services";

const Car = ({car}) => {
    const {id,brand,price,year}=car
    const dispatch = useDispatch();
    const deleteCar=async ()=>{
       await carsService.deleteByID(id)
        dispatch(carsActions.trigger())
    }
    return (
        <div>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={()=>dispatch(carsActions.updateCar(car))}>update</button>
            <button onClick={deleteCar}>delete</button>
        </div>
    );
};

export  {Car};