import fetch from '../util/fetch'

// 获取博客文章
export function getBloginfo(data) {
    return fetch({
        method: 'get',
        url: '/bloginfo',
        params: data
    })
}