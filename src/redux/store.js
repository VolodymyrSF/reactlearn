import {configureStore} from "@reduxjs/toolkit";

import {carsReducer} from "./slices/carSlice";

const store = configureStore({
    reducer:{
        cars:carsReducer
    }
});

export {store}