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
            component: () => import('@component/home/home.vue')
        },
        {
            path: '/blog',
            component: () => import('@component/blogs/blog.vue')
        },
        {
            path: '/view',
            component: () => import('@component/views/view.vue')
        },
        {
            path: '/yudilogin',
            component: () => import('@component/yudilogin/yudilogin.vue')
        },
        {
            path: '/yudisignup',
            component: () => import('@component/yudisignup/yudisignup.vue')
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