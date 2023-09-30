const express = require('express')
const { getContacts, 
        createContacts, 
        updateContact, 
        getContactWithId, 
        deleteContact } = require('../controllers/contactController.js')
const router = express.Router()

router.route('/')
.get(getContacts)
.post(createContacts)

router.route('/:id')
.get(getContactWithId)
.put(updateContact)
.delete(deleteContact)

module.exports = router