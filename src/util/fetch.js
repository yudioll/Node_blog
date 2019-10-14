import axios from 'axios'
// import store from '../store'
import qs from 'qs'

let baseURL = 'http://localhost:3000'

// let hostname = window.location.hostname

// if (hostname == 'localhost:3000') {
//     baseURL = 'http://localhost:3000'
// }
const service = axios.create({
    baseURL: baseURL, // api的base_url
    transformRequest: [function (data) {
        data = qs.stringify(data)
        return data
    }],
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})
// respone拦截器
service.interceptors.response.use(
    response => {
        // if (!store.getters.accesstoken) {
        //     store.dispatch('setAccessToken', response.headers['access-token'])
        // }
        let data = response.data
        if (response.status == 200) {
            return data
        } else {
            // Toast({
            //     message: data.err_msg,
            //     duration: 2000
            // })
            // return data
            return Promise.reject(data.err_msg);
        }
    },
    error => {
        return Promise.reject(error)
    }
)

export default service
