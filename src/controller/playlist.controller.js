const { getShowPlaylist, getPlaylistById } = require("../service/playlist.service")

// 控制器用来写需要暴露的接口方法
class SongController {
  async getPlaylist(ctx, next) {
    try {
      // console.log('123', listIds.split(','))
      const res = await getShowPlaylist()
      const list = []
      while(list.length != 12) {
        const ran = Math.floor(Math.random()*50)
        !list.includes(ran) && list.push(ran)
      }
      ctx.body = {
        code: 0,
        message: '歌单获取成功',
        result: [
          ...res.filter((item, i) => list.includes(i))
        ]
      }
    } catch (e) {
      console.log(e)
    }
    
  }
  
  async getPlaylistDetail(ctx, next) {
    try {
      const {id} = ctx.request.query
      const res = await getPlaylistById(id)
      ctx.body = {
        code: 0,
        message: '列表详情获取成功',
        result: [...res]
      }
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = new SongController()
