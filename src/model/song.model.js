
const {DataTypes} = require('sequelize')

const seq = require('../db/seq')

// 创建模型 (Model koa_user -> koa_users)
const Song = seq.define('song_list', {
  // id会自动创建

  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '歌曲名'
  },
  songer: {
    type: DataTypes.CHAR(64),
    allowNull: false,
    comment: ''
  },
  songId: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0,
    comment: '是否为管理员, 默认不是'
  }
}, {
  tableName: 'song_list'
})

// 强制同步数据库
User.sync()

module.exports = Song
