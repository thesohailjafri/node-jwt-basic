const express = require('express')
const router = express.Router()

const { login } = require('../controllers/main')

router.route('/login').post(login)

module.exports = router