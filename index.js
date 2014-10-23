var onHeaders = require('on-headers')

module.exports = function(){

  // Return express middleware
	return function(req, res, next) {

    // Set request received header
		res.setHeader('x-request-received', new Date().getTime())

    // Define listener for when headers are sent
	  onHeaders(res, function() {

      // Set response sent header
			this.setHeader('x-response-sent', new Date().getTime())
	 	})

    // Move on
	 	next()
	}

}
