const { QueryTypes } = require('sequelize')
const Song = require('../model/song.model')

class SongService {
  async getSongUrlById(songId) { // songId获取歌曲url
    const res = await Song.findOne({
      attributes: ['name', 'songer', 'pic'],
      where: {
        songId
      }
    })
    console.log("song:", res.dataValues)
    return res ? res.dataValues : null 
  }
  async getSingerSongs(singer) {
    const res = await Song.sequelize.query(`SELECT name, songId, songer FROM song_list WHERE songer = "${singer}"`, { type: QueryTypes.SELECT })
    return res
  }
  async getSongDetailById(songId) { // 获取歌曲详情
    const res = await Song.findOne({
      attributes: ['name', 'songer', 'songId', 'pic', 'url', 'lyric'],
      where: {
        songId
      }
    })
    console.log("song:", res.dataValues)
    return res ? res.dataValues : null
  }

}

module.exports = new SongService()

