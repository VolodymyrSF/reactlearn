import {createSlice} from "@reduxjs/toolkit";

let initialState={
    cars:[],
    trigger:null,
    updateCar:null,
};
const carSlice = createSlice({
    name:'cars',
    initialState,
    reducers:{
        setResponse:(state,action)=>{
            state.cars=action.payload
},
        trigger:state => {
            state.trigger=!state.trigger
        },
        updateCar:(state,action)=>{
            state.updateCar=action.payload
        },
    }
});

const {reducer:carsReducer,actions}=carSlice;

const carsActions={
    ...actions
}

export {
    carsReducer,
    carsActions
}