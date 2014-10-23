# Express Latency Header Middleware

This middleware adds two headers to the response.

- `x-request-received` is set by the server with the timestamp of when the request was received
- `x-response-sent` is set by the server with the timestamp of when the response was sent

[More information](https://github.com/montanaflynn/Latency-Headers-PoC) on why to add these headers.

## Example

```shell
npm install express-latency-headers --save
```

```javascript
var express = require('express')
var latencyHeaders = require('express-latency-headers')
var app = express()

app.use(latencyHeaders())

app.use(function(req, res, next) {
  setTimeout(function(){
    res.send('Hello World!')
  },1000)
})

var server = app.listen(3000)
```