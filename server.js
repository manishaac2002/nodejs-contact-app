const express = require('express')
const errorHandler = require('./middleware/errorHandler.js')

const dotenv = require('dotenv').config()
const application = express()

application.use(express.json())
application.use(errorHandler)


const port = process.env.PORT || 2000

application.use("/api/contacts", require('./routers/contact.routers.js'))

application.listen(port, () => {
    console.log(`Server is running on ${port}`);
})