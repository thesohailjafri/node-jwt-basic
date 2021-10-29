const express = require('express')
const router = express.Router()


const { checkAuth } = require('../middleware/auth')
const { login, dashboard } = require('../controllers/main')

router.route('/login').post(login)
router.route('/dashboard').get(checkAuth, dashboard)


module.exports = router