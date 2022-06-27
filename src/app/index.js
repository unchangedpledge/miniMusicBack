const Koa = require('koa')
const koaBody = require('koa-body')

const errHandler = require('./errHandler')
const userRouter = require('../router/user.route')
const songRouter = require('../router/song.route')
const playlistRouter = require('../router/playlist.route')
const app = new Koa()

app
  .use(koaBody())
  .use(userRouter.routes())
  .use(songRouter.routes())
  .use(playlistRouter.routes())

// 统一的错误处理
app.on('error', errHandler)


module.exports = app
