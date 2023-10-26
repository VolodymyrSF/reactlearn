import {axiosService} from "./axiosService";
import {urls} from "../urls/urls";

const postsService={
    getById:(postId)=>axiosService.get(urls.post.getById(postId))
}
export {postsService}