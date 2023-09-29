const getContacts = (request, response) => {
    response.status(200).json({ message: "Get all contacts" })
}

module.export = { getContacts }