
const seq = require('../db/seq')

// 创建模型 (Model koa_user -> koa_users)
const Playlist = seq.define('playlist', {}, {
  tableName: 'playlist',
  createdAt: false,
  updatedAt: false
})

// 强制同步数据库
Playlist.sync()

module.exports = Playlist
