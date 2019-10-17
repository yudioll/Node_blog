const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const cookieParser = require('cookie-parser')
const session = require('express-session')
const mongoStore = require('connect-mongo')(session)

//使用session、cookie
const app = express()
app.use(cookieParser('yudioll'))

//中间件使用session
app.use(session({
    //参数配置
    secret: 'yudioll',//加密字符串
    name: 'yudioll',//返回客户端key的名称，默认为connect_sid
    resave: false,//强制保存session，即使它没有变化
    saveUninitialized: true,//强制将未初始化的session存储。当新建一个session且未设定属性或值时，它就处于未初始化状态。在设定cookie前，这对于登录验证，减轻服务器存储压力，权限控制是有帮助的，默认为true
    cookie: { maxAge: 50000 },
    rolling: true, //在每次请求时进行设置cookie，将重置cookie过期时间
    store: new mongoStore({//将session数据存储到mongo数据库中
        url: 'mongodb://localhost/myblog', //数据库地址
        touchAfter: 24 * 3600  //多长时间往数据库中更新存储一次，除了在会话数据上更改了某些数据除外
    })
}));




app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.resolve(__dirname, '../dist')))

const route = require('../routes/router')

app.use(route)

app.listen(3000)


