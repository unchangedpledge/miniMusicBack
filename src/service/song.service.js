
const Song = require('../model/song.model')

const seq = require('../db/seq')

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

}

module.exports = new SongService()

