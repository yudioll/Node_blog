import fetch from '../util/fetch'

// 获取用户信息
export function getUserinfo(data) {
    return fetch({
        method: 'get',
        url: '/userinfo',
        params: data
    })
}

// 发表文章
export function addList(data) {
    return fetch({
        method: 'post',
        url: '/addlist',
        data: data
    })
}