const express = require('express')
const errorHandler = require('./middleware/error.handler.js')

const dotenv = require('dotenv').config()
const application = express()

application.use(express.json())



const port = process.env.PORT || 2000

application.use("/api/contacts", require('./routers/contact.routers.js'))
application.use(errorHandler)
application.listen(port, () => {
    console.log(`Server is running on ${port}`);
})