const express = require('express')
const dotenv = require('dotenv').config()

const application = express()
const port = process.env.PORT || 2000

application.use("/api/contacts", require('./routers/contact.routers.js'))

application.listen(port, () => {
    console.log(`Server is running on ${port}`);
})