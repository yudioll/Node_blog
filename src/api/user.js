import fetch from '../util/fetch'

export function getUserinfo(data) {
    return fetch({
        method: 'get',
        url: '/userinfo',
        params: data
    })
}