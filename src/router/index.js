import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

function createRouter() {
    const routes = [
        {
            path: '*',
            component: () => import('@component/home/home.vue')
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('@component/home/home.vue')
        },
        {
            path: '/blog',
            name: 'blog',
            component: () => import('@component/blogs/blog.vue')
        },
        {
            path: '/viewblog',
            name: 'viewblog',
            component: () => import('@component/viewblog/viewblog.vue')
        },
        {
            path: '/yudilogin',
            name: 'yudilogin',
            component: () => import('@component/yudilogin/yudilogin.vue')
        },
        {
            path: '/yudisignup',
            name: 'yudisignup',
            component: () => import('@component/yudisignup/yudisignup.vue')
        },
        {
            path: '/writeBlog',
            name: 'writeBlog',
            component: () => import('@component/writeBlog/writeBlog.vue')
        }
    ];

    const router = new Router({
        // 前端调试使用hash --模式
        mode: 'hash',
        routes
    });

    return router;
}

export default createRouter;