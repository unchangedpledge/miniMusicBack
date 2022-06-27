const Router = require('koa-router')
const { getSongUrl, getSongs, getSongDetail } = require('../controller/song.controller')

const router = new Router({prefix: '/song'})

router.get('/url', getSongUrl)
router.get('/singer', getSongs)
router.get('/detail', getSongDetail)

module.exports = router
