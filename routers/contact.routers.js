const express = require('express')
const router = express.Router()

router.get('/',(request,response)=>{
    response.status(200).json({"message":"Get all contacts"})
})
router.post('/',(request,response)=>{
    response.status(200).json({"message":" Create all contacts"})
})
router.put('/:id',(request,response)=>{
    response.status(200).json({"message":`Update all contacts ${request.params.id}`})
})
router.delete('/:id',(request,response)=>{
    response.status(200).json({"message":`Delete all contacts ${request.params.id}`})
})

module.exports =router