require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const { CustomAPIError, BadRequestAPIError } = require('./errors')
const mainRouter = require('./routes/main')

// middleware
app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/jwt', mainRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)



const port = process.env.PORT || 4000

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()
