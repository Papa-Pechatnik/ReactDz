import axios from 'axios';
import {baseURL} from "../constants/constants.js"  

const apiService = axios.create({baseURL});

export default apiService;


