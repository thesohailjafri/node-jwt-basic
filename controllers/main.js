const { BadRequestAPIError } = require('../errors')
const jwt = require('jsonwebtoken')
const uuid4 = require('uuid4')

const secret = process.env.JWT_SECRET

const login = (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
        throw new BadRequestAPIError('Missing username or password')
    }
    const id = uuid4()
    const token = jwt.sign({ id, username }, secret, { expiresIn: '2d' })
    res.send({ msg: 'login success', token })
}

const dashboard = (req, res) => {
    res.send({ msg: req.user })
}



module.exports = {
    login,
    dashboard
}
