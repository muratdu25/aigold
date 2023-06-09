import axios from "axios"
import store from "../store"

const axiosClient = axios.create({
    baseURL : `${process.env.VUE_APP_API_URL}/api`
})

axiosClient.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${store.state.user.token}`
    return config;
})

export default axiosClient;