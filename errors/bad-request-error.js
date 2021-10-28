const { StatusCodes } = require('http-status-codes')
const CustomAPIError = require('./custom-error')

class BadRequestAPIError extends CustomAPIError {
    constructor (message) {
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}

module.exports = BadRequestAPIError