const seq = require('../db/seq')

// 创建模型 (Model koa_user -> koa_users)
const Singer = seq.define('songer_list', {}, {
  tableName: 'songer_list',
  createdAt: false,
  updatedAt: false
})

// 强制同步数据库
Singer.sync()

module.exports = Singer