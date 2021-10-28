const { BadRequestAPIError } = require('../errors')
const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET

const login = (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
        throw new BadRequestAPIError('Missing username or password')
    }
    const token = jwt.sign({ username }, secret, { expiresIn: '2d' })
    res.send({ msg: 'login success', token })
}



module.exports = {
    login,
}
