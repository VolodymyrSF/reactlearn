import {axiosService} from "./axiosService";
import {urls} from "../urls/urls";

const postsService={
    getByUserId:(userId)=>axiosService.get(urls.posts.postsByUserId(userId)),
    getByPostId:(postId)=>axiosService.get(urls.posts.postByPostId(postId))
}

export {postsService}