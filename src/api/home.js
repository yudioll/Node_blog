import fetch from '../util/fetch'

export function getList() {
    return fetch({
        method: 'get',
        url: '/list'
    })
}

// 注册账户接口
export function getSinup(data) {
    return fetch({
        method: 'post',
        url: '/yudisignup',
        data
    })
}

// 登陆账户接口
export function getLogin(data) {
    return fetch({
        method: 'post',
        url: '/yudilogin',
        data
    })
}