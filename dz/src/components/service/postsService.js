import { urls } from "../constants/constants";
import { axiosService } from "./axiosService";


const postService = {
    getAll: ()=> axiosService(urls.posts.base),
    getId:(id)=> axiosService(urls.posts.byId(id)),
}
export {
    postService
}
