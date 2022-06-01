const { getSongUrlById } = require("../service/song.service")

// 控制器用来写需要暴露的接口方法
class SongController {
  async getSongUrl(ctx, next) {
    try {
      const {songId} = ctx.request.query
      const res = await getSongUrlById(songId)
      ctx.body = {
        code: 0,
        message: '歌曲Url获取成功',
        result: {
          ...res
        }
      }
    } catch (e) {
      console.log(e)
    }
    
  }
}

module.exports = new SongController()
