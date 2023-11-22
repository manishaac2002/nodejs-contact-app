const getContacts = (request, response) => {
    response.status(200).json({ message: "Get all contacts" })
}

const createContacts = async(request, response) => {
    console.log("This is request body :", request.body);
    const { name, email, phone } = request.body
    if (!name || !email || !phone) {
        response.status(400)
        throw new Error("All fields are mandatory")
    }
    response.status(201).json({ message: " Create Contacts" })
}

const getContactWithId = async(request, response) => {
    response.status(200).json({ message: `Get Contacts for ${request.params.id}` })
}

const updateContact =async (request, response) => {
    response.status(200).json({ message: `Update contacts for ${request.params.id}` })
}

const deleteContact = async(request, response) => {
    response.status(200).json({ message: `Delete contacts for ${request.params.id}` })
}
const testingController = () => {
    console.log("tester");
}
module.exports = {
    getContacts,
    createContacts,
    getContactWithId,
    updateContact,
    deleteContact,
    testingController
} 