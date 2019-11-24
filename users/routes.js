const express = require('express')
const db = require('../data/dbConfig.js')
const protect = require('../auth/protect-middleware.js')

const router = express.Router()

router.get('/', protect, (req, res, next) => {
  db('users')
    .then(users => res.status(200).json(users))
    .catch(next)
})

module.exports = router
