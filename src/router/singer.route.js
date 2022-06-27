const Router = require('koa-router')
const { getSingerTypes, getSingerList } = require('../controller/singer.controller')

const router = new Router({prefix: '/singers'})

router.get('/', getSingerList)
router.get('/types', getSingerTypes)

module.exports = router
