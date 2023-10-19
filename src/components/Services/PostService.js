
import {axiosService} from "./AxiosService";
import {urls} from "../Urls/Urls";


const PostService ={
    getAll:()=>
        axiosService.get(urls.posts.base),
    getById:(id)=>
        axiosService.get(urls.posts.byId(id))
}
export {PostService}