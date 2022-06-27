
const { QueryTypes } = require('sequelize')
const Singer = require('../model/singer.model')

class SingerService {
  async getTypeList() { // 获取所有歌手类别
    const res = await Singer.sequelize.query('SELECT DISTINCT `type` FROM singer_list', { type: QueryTypes.SELECT })
    return res.map((item) => {
      return item.type
    })
  }
  async getList(type) {
    const res = await Singer.sequelize.query(`SELECT * FROM singer_list WHERE TYPE = "${type}"`, { type: QueryTypes.SELECT })
    return res
  }
}

module.exports = new SingerService()
