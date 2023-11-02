
import {axiosService} from "./axiosService";

import {urls} from "../urls/urls";

const usersService={
    getAll:()=>axiosService.get(urls.users.base),
    getByUserId:(userId)=>axiosService.get(urls.users.userById(userId))
}

export {usersService}