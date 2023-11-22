const {constants} =require('../constants.js') 
const errorHandler = (error, request, response, next) => {
    const statusCode = response.statusCode ? response.statusCode : 500
    switch (key) {
        case constants.VALIDATION_ERROR:
            response.json({
                title: "Validation Failed",
                message: error.message,
                stackTrace: error.stack
            })
            break;
        case constants.UNAUTHORIZED:
            response.json({
                title: "Unauthorized",
                message: error.message,
                stackTrace: error.stack
            })
            break;
        case constants.FORBIDDEN:
            response.json({
                title: "Forbidden",
                message: error.message,
                stackTrace: error.stack
            })
            break;
        case constants.NOT_FOUND:
            response.json({
                title: "Not Found",
                message: error.message,
                stackTrace: error.stack
            })
        case constants.SERVER_ERROR:
            response.json({
                title: "Server Error",
                message: error.message,
                stackTrace: error.stack
            })
            break;

        default:
            console.log("No Error..!");
            break;
    }

}
module.exports = errorHandler