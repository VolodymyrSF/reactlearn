import {axiosService} from "./axiosService";
import {urls} from "../urls/urls";

const commentsService={
    getComments:(postId)=>axiosService.get(urls.comments.base(postId))
}

export {commentsService}