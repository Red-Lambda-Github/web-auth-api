const express = require('express')
const db = require('../data/dbConfig.js')
const bcrypt = require('bcryptjs')

const router = express.Router()

router.post('/register', (req, res, next) => {
  const credentials = req.body
  if (credentials.username && credentials.password) {
    credentials.password = bcrypt.hashSync(credentials.password)
    db('users')
      .insert(credentials)
      .then(([id]) => res.status(204).end())
      .catch(next)
  } else {
    res.status(400).json({ message: 'Username and password required.' })
  }
})

router.post('/login', (req, res, next) => {
  const { username, password } = req.body
  db('users')
    .select()
    .where({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        req.session.userId = user.id
        res.status(200).json({ message: 'Logged in' })
      } else {
        res.status(401).json({ message: 'Bad credentials' })
      }
    })
    .catch(next)
})

module.exports = router
