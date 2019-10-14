import Vue from 'vue';
import Router from 'vue-router';
// import App from '../App.vue'

Vue.use(Router);

function createRouter() {
    const routes = [
        {
            path: '*',
            component: () => import('../components/home/home.vue')
        },
        {
            path: '/home',
            component: () => import('../components/foo.vue')
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