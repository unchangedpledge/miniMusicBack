const Router = require('koa-router')
const { getSongUrl } = require('../controller/song.controller')

const router = new Router({prefix: '/song'})

router.get('/url', getSongUrl)

module.exports = router
