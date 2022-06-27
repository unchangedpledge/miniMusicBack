const Router = require('koa-router')
const { getSongUrl, getSongs } = require('../controller/song.controller')

const router = new Router({prefix: '/song'})

router.get('/url', getSongUrl)
router.get('/singer', getSongs)

module.exports = router
