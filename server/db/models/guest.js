const Sequelize = require('sequelize')
const db = require('../db')

const Guest = db.define('guest', {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
})

module.exports = Guest
