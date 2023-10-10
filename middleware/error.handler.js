const errorHandler = (error, request, response, next) => {
    const statusCode = response.statusCode ? response.statusCode : 500
    console.log("hey this is error handler");
    response.json({ message: error.message, stackTrace: error.stack })
}
module.exports = { errorHandler }