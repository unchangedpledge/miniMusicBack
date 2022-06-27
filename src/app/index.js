const Koa = require('koa')
const koaBody = require('koa-body')

const errHandler = require('./errHandler')
const userRouter = require('../router/user.route')
const songRouter = require('../router/song.route')
const playlistRouter = require('../router/playlist.route')
const singerRouter = require('../router/singer.route')
const bannerRouter = require('../router/banner.route')
const app = new Koa()

app
  .use(koaBody())
  .use(userRouter.routes())
  .use(songRouter.routes())
  .use(playlistRouter.routes())
  .use(singerRouter.routes())
  .use(bannerRouter.routes())

// 统一的错误处理
app.on('error', errHandler)


module.exports = app
