const Router = require('koa-router')
const { getPlaylist, getPlaylistDetail } = require('../controller/playlist.controller')

const router = new Router({prefix: '/playlist'})

router.get('/', getPlaylist)
router.get('/detail', getPlaylistDetail)

module.exports = router
