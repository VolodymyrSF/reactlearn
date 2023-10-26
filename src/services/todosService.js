import {axiosService} from "./axiosService";
import {urls} from "../urls/urls";

const todosService={
    getAll:()=>axiosService.get(urls.todos)
}
export {todosService}