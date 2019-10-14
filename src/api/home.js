import fetch from '../util/fetch'

export function getList() {
    return fetch({
        method: 'get',
        url: '/list'
    })
}