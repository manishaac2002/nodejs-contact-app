const express = require('express')
const router = express.Router()
const { getContacts } = require('../controllers/contactController.js')

// router.get("/",getContacts)
router.post('/', (request, response) => {
    response.status(200).json({ message: " Create Contacts" })
})
router.get('/:id', (request, response) => {
    response.status(200).json({ message: `Get Contacts for ${request.params.id}` })
})
router.put('/:id', (request, response) => {
    response.status(200).json({ message: `Update contacts for ${request.params.id}` })
})
router.delete('/:id', (request, response) => {
    response.status(200).json({ message: `Delete contacts for ${request.params.id}` })
})

module.exports = router