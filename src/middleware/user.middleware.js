
const bcrypt = require('bcryptjs')
const {getUserInfo} = require('../service/user.service')
const {userFormatError, userAlreadyExisted, userNotExist, userLoginError, invalidPasswrod} = require('../constants/err.type')

const userValidator = async (ctx, next) => {
  const {user_name, password} = ctx.request.body
  console.log(user_name)
  // 合理性
  if(!user_name || !password) {
    console.error('用户名或密码为空', ctx.request.body )
    // ctx.status = 400
    // ctx.body = {
    //   code: '10001',
    //   message: '用户名或密码为空',
    //   result: ''
    // }

    ctx.app.emit('error', userFormatError, ctx)
    return
  }
  await next()
}

const verifyUser = async (ctx, next) => {
  const {user_name} = ctx.request.body
  if(await getUserInfo({user_name})) { // 已经存在则返回
    ctx.app.emit('error', userAlreadyExisted, ctx)
    return
  }
  await next()
}

const cryptPassword = async (ctx, next) => {
  try {
    const {password} = ctx.request.body
    const salt = bcrypt.genSaltSync(10)
    // hash 保存的是密文
    const hash = bcrypt.hashSync(''+password, salt)
    ctx.request.body.password = hash
    await next()
  } catch (error) {
    console.log(error)
  }
}

const verifyLogin = async (ctx, next) => {
  const {user_name, password} = ctx.request.body
  // 1.判断用户是否存在（不存在报错）
  try {
    const res = await getUserInfo({user_name})
    console.log(res)
    if(!res) {
      console.error('用户名不存在', {user_name})
      ctx.app.emit('error', userNotExist, ctx)
      return
    }
    // 2.密码是否匹配
    if(!bcrypt.compareSync(''+password, res.password)) {
      ctx.app.emit('error', invalidPasswrod, ctx)
      return
    }
  } catch(err) {
    console.log(err)
    return ctx.app.emit('error', userLoginError, ctx)
  }
  

  await next()
}


module.exports = {
  userValidator,
  verifyUser,
  cryptPassword,
  verifyLogin
}
