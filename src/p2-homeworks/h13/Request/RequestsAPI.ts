import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/'
})

export const ignatApi = {
    testApi (success: boolean) {
        return axiosInstance.post('auth/test',{
            success
        })
    }
}