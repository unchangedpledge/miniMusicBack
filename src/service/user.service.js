const User = require('../model/user.model')

class UserService {
  async createUser(user_name, password) {
    //  写入数据库
    const u = await User.create({user_name, password})
    // console.log(u)
    return u.dataValues
  }
  async getUserInfo(obj) {
    const whereOpt = {...obj}
    // id && (whereOpt.id = id)
    // user_name && (whereOpt.user_name = user_name)
    // password && (whereOpt.password = password)
    // is_admin && (whereOpt.is_admin = is_admin)
    const res = await User.findOne({
      attributes: ['id', 'user_name', 'password', 'is_admin'],
      where: whereOpt
    })

    return res ? res.dataValues : null
  }
  async updateById({id, ...params}) {
    const whereOpt = {id}
    // console.log(params)
    const res = await User.update(params, {where: whereOpt})
    // console.log(res)
    return !!res[0]
  }
}

module.exports = new UserService()