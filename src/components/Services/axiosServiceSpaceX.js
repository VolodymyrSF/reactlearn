import axios from "axios";

import {baseUrlSpace} from "../Urls/urlsSpaceX";

const axiosServiceSpaceX=axios.create({baseURL:baseUrlSpace})

export {axiosServiceSpaceX}