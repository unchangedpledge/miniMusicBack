const { getSongUrlById, getSingerSongs, getSongDetailById, searchSongByKeywords } = require("../service/song.service")

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
  async getSongs(ctx, next) {
    try {
      const singer = ctx.request.query.singer
      console.log('歌手', singer)
      const res = await getSingerSongs(singer)
      console.log(res)
      ctx.body =  {
        code: 0,
        message: '歌手歌曲获取成功',
        result: [...res]
      }
    } catch (e) {
      console.log(e)
    }
  }
  async getSongDetail(ctx, next) {
    try {
      const {songId} = ctx.request.query
      const res = await getSongDetailById(songId)
      ctx.body = {
        code: 0,
        message: '歌曲详情获取成功',
        result: {
          ...res
        }
      }
    } catch (e) {
      console.log(e)
    }
  }

  async searchSong(ctx, next) {
    try {
      const keywords = ctx.request.query.keywords
      console.log('关键字', keywords)
      const res = await searchSongByKeywords(keywords)
      console.log(res)
      ctx.body =  {
        code: 0,
        message: '搜索成功',
        result: [...res]
      }
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = new SongController()
