import axios, { Axios } from "axios";
import { baseURL } from "../constants/constants";

const axiosService = axios.create({baseURL});

export {
    axiosService
};