import axios from "axios";

import {baseUrl} from "../Urls/Urls";



const axiosService=axios.create({baseURL: baseUrl})

export {axiosService}