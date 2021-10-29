const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors')

const checkAuth = async (req, res, next) => {
    const bearerHeader = req.headers['authorization']

    if (!bearerHeader || bearerHeader.split(' ')[0] !== 'Bearer') {
        throw new UnauthenticatedError('No token provided')
    }

    try {
        if (typeof bearerHeader !== 'undefined' && bearerHeader !== null && bearerHeader.startsWith('Bearer ')) {
            const bearer = bearerHeader.split(' ')
            const bearerToken = bearer[1]
            const decoded = jwt.verify(bearerToken, process.env.JWT_SECRET)
            const { id, username } = decoded
            req.user = { id, username }
            next()
        }
    } catch (error) {
        throw new UnauthenticatedError('Invalid token')
    }

}

module.exports = {
    checkAuth
}
