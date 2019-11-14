const knex = require('knex')
const knexConfig = require('../knexfile.js')

const db = knex(knexConfig[process.env.NODE_ENV === 'production' ? 'production' : 'development'])

module.exports = db
