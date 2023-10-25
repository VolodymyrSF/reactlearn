import React, {useEffect} from 'react';

import {useForm} from "react-hook-form";
import {carsService} from "../services/carsService";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../validators/carValidator";
const CarForm = ({setRefreshed,updateCar,setUpdateCar}) => {
    const {reset,register,handleSubmit,formState:{isValid,errors},setValue}=useForm({
        mode:"all",
        resolver:joiResolver(carValidator)
    })

    const save=async (car)=>{
        await carsService.create(car)
        setRefreshed(prev=>!prev)
        reset()

    }
    useEffect(()=>{
        if (updateCar){
            setValue('brand',updateCar.brand, {shouldValidate:true})
            setValue('year',updateCar.year, {shouldValidate:true})
            setValue('price',updateCar.price, {shouldValidate:true})
        }
    },[updateCar,setValue])

    const update=async (car)=>{
       await carsService.updateById(updateCar.id,car)
        setRefreshed(prev=>!prev)
        setUpdateCar(null)
        reset()
    }
    return (
        <>
        <form onSubmit={handleSubmit(updateCar?update:save)}>
            <input type={"text"} placeholder={'brand'} {...register('brand')}/>
            <input type={"text"} placeholder={'year'} {...register('year',{valueAsNumber:true})}/>
            <input type={"text"} placeholder={'price'} {...register('price',{valueAsNumber:true})}/>
            <button disabled={!isValid}>{updateCar?'Update':'Save'}</button>
        </form>
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
        </>
    );

};

export {CarForm};