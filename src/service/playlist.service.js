
const { QueryTypes } = require('sequelize')
const Playlist = require('../model/playlist.model')

class PlaylistService {
  async getShowPlaylist() { 
    console.log('service')
    const res = await Playlist.sequelize.query('SELECT * FROM playlist', { type: QueryTypes.SELECT })
    // console.log("song:", res)
    return res
  }
  
  async getPlaylistById(id) {
    const res = await Playlist.sequelize.query(`SELECT name, songer, songId FROM song_list where listId = "${id}"`, { type: QueryTypes.SELECT })
    return res
  }
}

module.exports = new PlaylistService()

