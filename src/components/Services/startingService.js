import {axiosServiceSpaceX} from "./axiosServiceSpaceX";
import {urlsSpace} from "../Urls/urlsSpaceX";


const startingService={
    getAll:()=> axiosServiceSpaceX.get(urlsSpace.starts.base)
}

export {startingService}