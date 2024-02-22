import { urls } from "../constants/constants";
import apiService from "./apiService";


const postService = {
    getAll: () => apiService.get(urls.posts),
    create: (item) => apiService.post(urls.posts, item)
}

export default postService;