const { getTypeList, getList } = require('../service/singer.service')

class SingerController {
  async getSingerTypes(ctx, next) { // 获取歌手类别
    try {
      const res = await getTypeList()
      ctx.body =  {
        code: 0,
        message: '歌手类别获取成功',
        result: res
      }
    } catch (e) {
      console.log(e)
    }
  }
  async getSingerList(ctx, next) {
    try {
      const type = ctx.request.query.type
      console.log('type', type)
      const res = await getList(type)
      console.log(res)
      ctx.body =  {
        code: 0,
        message: '歌手列表获取成功',
        result: [...res]
      }
    } catch (e) {
      console.log(e)
    }
  }

}


module.exports = new SingerController()
