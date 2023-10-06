const errorHandler = (error, request, response, next) => {
    const statusCode = response.statusCode ? response.statusCode : 500
    response.json({ message: error.message, stackTrace: error.stack })
}
console.log("hey this is error handler");
module.exports = { errorHandler }