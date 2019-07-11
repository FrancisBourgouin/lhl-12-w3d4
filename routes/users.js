const express = require('express')
const users = express.Router()


users.get('/')

users.post('/')

users.put('/:id')

users.delete('/:id')

users.get('/:id')

module.exports = users


