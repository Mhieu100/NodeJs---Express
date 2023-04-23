const { constants } = require('../constants.js');
const errorhandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({ title: 'Validation failed', message: err.message, stackTrace: err.stack })
            break;
        case constants.NOT_FOUND:
            res.json({ title: 'Not found', message: err.message, stackTrace: err.stack })
            break;
        case constants.UNAUTHORIZED:
            res.json({ title: 'Un authorize', message: err.message, stackTrace: err.stack })
            break;
        case constants.FORBIDDEN:
            res.json({ title: 'Forbidden', message: err.message, stackTrace: err.stack })
            break;
        case constants.SERVER_ERROR:
            res.json({ title: 'Server error', message: err.message, stackTrace: err.stack })
            break;
        default:
            console.log('No Error All Good'); 
            // res.json({ title: 'No Error All Good', message: err.message, stackTrace: err.stack })
            break;
    }
}

module.exports = errorhandler;