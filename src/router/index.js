import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

function createRouter() {
    const routes = [
        {
            path: '*',
            component: () => import('../components/home/home.vue')
        },
        {
            path: '/home',
            component: () => import('../components/home/home.vue')
        },
        {
            path: '/blog',
            component: () => import('../components/blogs/blog.vue')
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