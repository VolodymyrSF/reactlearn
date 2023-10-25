import React from 'react';
import {carsService} from "../services/carsService";

const Car = ({car,setUpdateCar,setRefresher}) => {
    const {id,brand,price,year} = car
    const delCar=async ()=>{
        await carsService.deleteByID(id)
        setRefresher(prev=>!prev)
    }
    return (
        <div>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={()=>setUpdateCar(car)}>update</button>
            <button onClick={delCar}>delete</button>
        </div>
    );
};

export {Car};