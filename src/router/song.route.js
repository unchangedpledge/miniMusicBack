const Router = require('koa-router')
const { getSongUrl, getSongs, getSongDetail, searchSong } = require('../controller/song.controller')

const router = new Router({prefix: '/song'})

router.get('/url', getSongUrl)
router.get('/singer', getSongs)
router.get('/detail', getSongDetail)
router.get('/search', searchSong)

module.exports = router
