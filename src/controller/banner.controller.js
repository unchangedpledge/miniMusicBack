
const axios = require('axios')

// 控制器用来写需要暴露的接口方法
class BannerController {
  async getBanner(ctx, next) {
    try {
      // console.log('123', listIds.split(','))
      const res = await axios.get('http://localhost:3000/banner?type=2')
      ctx.body = {
        code: 0,
        message: 'banner获取成功',
        result: [
          ...res.data.banners
        ]
      }
    } catch (e) {
      console.log(e)
    }
    
  }
}

module.exports = new BannerController()
