const knex = require('knex')
const knexConfig = require('../knexfile.js')

const env = process.env.DB_ENV || 'development';

const db = knex(knexConfig[env])

module.exports = db
