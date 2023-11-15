import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch, useSelector} from "react-redux";


import {carValidator} from "../validators/carValidator";
import {carsService} from "../services";
import {carsActions} from "../redux/slices";

const CarForm = () => {
    const {reset, register, handleSubmit, formState: {errors, isValid}, setValue} = useForm({
        mode:"all",
        resolver:joiResolver(carValidator)
    });

    const dispatch = useDispatch();
    const {updateCar} = useSelector(state => state.cars);

    useEffect(()=> {
        if (updateCar) {
        setValue('brand', updateCar.brand, {shouldValidate: true})
        setValue('year', updateCar.year, {shouldValidate: true})
        setValue('price', updateCar.price, {shouldValidate: true})
    }
    },[updateCar])
    const save=async (car)=>{
        await carsService.create(car)
        dispatch(carsActions.trigger())
        reset()
    }
    const update=async (car)=>{
        await carsService.updateById(updateCar.id,car)
        dispatch(carsActions.trigger())
        dispatch((carsActions.updateCar(null)))
        reset()
    }
    return (
        <form onSubmit={handleSubmit(updateCar?update:save)}>
            <input type={"text"} placeholder={'brand'} {...register('brand')}/>
            <input type={"text"} placeholder={'price'} {...register('price')}/>
            <input type={"text"} placeholder={'year'} {...register('year')}/>
            <button disabled={!isValid}>{updateCar?'update':'save'}</button>
            {errors.brand && <div>brand:{errors.brand.message}</div>}
            {errors.price && <div>price:{errors.price.message}</div>}
            {errors.year && <div>year:{errors.year.message}</div>}
        </form>
    );
};

export {CarForm};