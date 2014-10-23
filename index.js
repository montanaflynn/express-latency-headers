var onHeaders = require('on-headers')
module.exports = function(){
	return function(req, res, next) {
		res.setHeader('x-request-received', new Date().getTime())
	  	onHeaders(res, function() {
			this.setHeader('x-response-sent', new Date().getTime())
	 	})
	 	next()
	}
}
