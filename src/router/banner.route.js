const Router = require('koa-router')
const { getBanner } = require('../controller/banner.controller')

const router = new Router({prefix: '/banner'})

router.get('/', getBanner)

module.exports = router
