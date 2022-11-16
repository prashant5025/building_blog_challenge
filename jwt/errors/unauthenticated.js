const CustomAPIError = require('./custom-error')
const statusCode = require('http-status-codes')
class UnauthenticatedError extends CustomAPIError {
    constructor(message) {
      super(message)
      this.statusCode =  statusCode.UNAUTHORIZED
    }
  }
  
  module.exports = CustomAPIError;