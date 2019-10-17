const express = require('express')
const fs = require('fs')
const path = require('path')
const router = express.Router()
// list-mongoose
const List = require('../mongo-modules/list/list-mongodb');
// user-mongodb
const User = require('../mongo-modules/user/user-mongodb');

const serverBundle = require(path.resolve(__dirname, '../dist/vue-ssr-server-bundle.json'));
const clientManifest = require(path.resolve(__dirname, '../dist/vue-ssr-client-manifest.json'));
const template = fs.readFileSync(path.resolve(__dirname, '../dist/index.ssr.html'), 'utf-8');

const renderer = require('vue-server-renderer').createBundleRenderer(serverBundle, {
    runInNewContext: false,
    template,
    clientManifest
})
const baseHtml = (req, res, next) => {
    const context = {
        url: req.url,
        cookie: req.cookie
    }
    renderer.renderToString(context, (err, html) => {
        if (err) {
            res.status(500).send('server error')
        } else {
            res.status(200).send(html)
        }

    })
}
router.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', '*')
    res.header('Access-Control-Allow-Headers', 'Content-Type,,username,XFILENAME,XFILECATEGORY,XFILESIZE,X-URL-PATH,x-access-token')
    next()
})

router.get('/', (req, res) => {
    baseHtml(req, res)
})
router.get('/home', (req, res) => {
    baseHtml(req, res)
})
router.get('/blog', (req, res) => {
    baseHtml(req, res)
})
router.get('/view', (req, res) => {
    baseHtml(req, res)
})

/**
 * 登陆接口
 * @ahthor yudioll
 * @errcode
 * 102 用户名错误（用户不存在）
 * 103 密码错误
 */
router.post('/yudilogin', (req, res) => {
    User.find((err, data) => {
        if (err) {
            throw Error('server error')
        } else {
            // 如果用户名不存在
            let userData = data.filter((user) => {
                return user.username == req.body.username
            })
            if (userData.length === 0) {
                res.send({
                    status: false,
                    errorMessage: "用户不存在，请先注册再登录哦",
                    successMessage: '',
                    errcode: 102
                })

            } else {
                //用户存在，密码输入错误情况下
                User.find({ username: req.body.username }, (err, data) => {
                    if (err) {
                        throw Error('server error')
                    } else {
                        // 找到当前登录用户的信息--对密码进行匹配
                        const [user] = data
                        if (user.pass === req.body.pass) {
                            req.session.username = req.body.username
                            res.send({
                                status: true,
                                data: req.session,
                                successMessage: '登陆成功',
                            })
                        } else {
                            res.send({
                                status: false,
                                errorMessage: "用户名或密码错误，请重新输入",
                                successMessage: '',
                                errcode: 103
                            })
                        }
                    }
                })
            }
        }
    })
})

/**
 * 退出登陆
 * @author yudioll
 */
router.get('/yudiloginOut', (req, res) => {
    //销毁session
    //方法一,将cookie的时间设置为0，只有cookie中携带的信息通过客户端请求传到服务器，由对应的session接收session才起作用，cookie没了session自然而然的将不起作用
    req.session.cookie.maxAge = 0;
    //方法二destroy
    // req.session.destroy((err) => {
    //     console.log(err)
    // })
    res.redirect('/')
})

/**
 * 注册用户
 * @author yudioll
 */
router.post('/yudisignup', (req, res) => {
    User.find((err, data) => {
        if (err) {
            throw Error('serve error')
        } else {
            // 用户名重复错误
            if (data.some((user) => {
                return user.username === req.body.username
            })) {
                res.send({
                    status: false,
                    errorMessage: "用户名已存在，请重新输入",
                    successMessage: '',
                    errcode: 101
                })
            } else {
                new User(req.body).save((err, ret) => {
                    if (err) {
                        throw Error('server error in mongodb')
                    } else {
                        res.send({
                            status: true,
                            message: '用户注册成功',
                        })
                    }
                })
            }
        }
    })

})

/**
 * @description 获取用户信息
 * @author yudioll
 * @name userinfo
 */
router.get('/userinfo', (req, res) => {
    // 判断当前用户是否登录
    if (req.session.username) {
        User.find({ username: req.session.username }, (err, data) => {
            if (err) return res.statusCode(500).send('server error')
            console.log(data)
            res.send({
                data,
                loginStatus: true
            })
        })
    } else {
        res.send({
            loginStatus: false,
            errcode: 201 //未登陆状态码
        })
    }
})

/**
 * @description 返回博文列表
 * @author yudioll
 * @name list
 */
router.get('/list', (req, res) => {
    List.find((err, data) => {
        if (err) {
            throw Error('serve error in mongodb')
        } else {
            res.send(data)
        }
    })
})

module.exports = router