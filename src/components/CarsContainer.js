import React, {useEffect, useState} from 'react';

import {carsService} from "../services/carsService";
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";


const CarsContainer = () => {
    const [cars,setCars]=useState([])
    const [refreshed,setRefreshed]=useState(null)
    const [updateCar,setUpdateCar]=useState(null)

    useEffect(()=>{
        carsService.getAll().then(({data})=>setCars(data))
    },[refreshed])
    return (
        <div>
            <CarForm setRefreshed={setRefreshed} updateCar={updateCar} setUpdateCar={setUpdateCar}/>
            <hr/>
            <Cars cars={cars} setUpdateCar={setUpdateCar} setRefreshed={setRefreshed}/>
        </div>
    );
};

export {CarsContainer};