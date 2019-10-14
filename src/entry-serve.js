import { createApp } from './app.js';

export default context => {
    return new Promise((resolve, reject) => {
        const { app, store, router, App } = createApp(context);

        router.push(context.url);

        router.onReady(() => {

            const matchedComponents = router.getMatchedComponents();

            if (!matchedComponents.length) {
                return reject({ code: 404 });
            }
            Promise.all(matchedComponents.map(component => {
                if (component.asyncData) {
                    return component.asyncData({
                        store,
                        route: router.currentRoute
                    });
                }
            })).then(() => {
                // 当使用 template 时，context.state 将作为 window.__INITIAL_STATE__ 状态，自动嵌入到最终的 HTML 中
                context.state = store.state;

                // 返回根组件
                resolve(app);
            });
        }, reject);
    });
}

// import { createApp } from './app.js';

// export default context => {
//     return new Promise((resolve, reject) => {
//         const { app, store, router, App } = createApp();
//         let components = App.components;
//         let asyncDataPromiseFns = [];

//         Object.values(components).forEach(component => {
//             if (component.asyncData) {
//                 asyncDataPromiseFns.push(component.asyncData({ store }));
//             }
//         });
//         console.log(context.url)
//         Promise.all(asyncDataPromiseFns).then((result) => {
//             // 当使用 template 时，context.state 将作为 window.__INITIAL_STATE__ 状态，自动嵌入到最终的 HTML 中
//             context.state = store.state;
//             resolve(app);
//         }, reject);
//     });
// }