import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

function createRouter() {
    const routes = [
        {
            path: '*',
            component: () => { }
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
        mode: 'history',
        routes
    });

    return router;
}

export default createRouter;