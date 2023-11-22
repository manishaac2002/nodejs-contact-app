const errorHandler = (error, request, response, next) => {
    const statusCode = response.statusCode ? response.statusCode : 500
    switch (key) {
        case 400:
            response.json({
                title: "Not Found",
                message: error.message,
                stackTrace: error.stack
            })
            break;
        case 404:
            response.json({
                title: "Validation Failed",
                message: error.message,
                stackTrace: error.stack
            })
            break;

        default:
            break;
    }

}
module.exports = errorHandler