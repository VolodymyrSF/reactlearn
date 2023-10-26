import {axiosService} from "./axiosService";
import {urls} from "../urls/urls";

const albumsService={
    getAll:()=>axiosService.get(urls.albums)
}
export {albumsService}