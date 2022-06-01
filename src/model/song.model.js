
const {DataTypes} = require('sequelize')

const seq = require('../db/seq')

// 创建模型 (Model koa_user -> koa_users)
const Song = seq.define('song_list', {}, {
  tableName: 'song_list',
  createdAt: false,
  updatedAt: false
})

// 强制同步数据库
Song.sync()

// 查询所有用户
// const users = await Song.findAll();
// console.log(users.every(user => user instanceof Song)); // true
// console.log("All users:", JSON.stringify(users, null, 2));

module.exports = Song
