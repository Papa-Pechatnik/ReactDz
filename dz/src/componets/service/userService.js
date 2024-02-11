import { urls } from "../constants/constants"
import { axiosService } from "./axiosService"

const userService = {
    getAll: () => axiosService(urls.users.base),
    getByid: (id) => axiosService(urls.users.byId(id))
}

export {
    userService
}