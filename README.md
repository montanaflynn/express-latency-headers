# Express Latency Header Middleware

This middleware adds two headers to the response.

- `x-request-received` is set by the server with the timestamp of when the request was received
- `x-response-sent` is set by the server with the timestamp of when the response was sent

[More information](https://github.com/montanaflynn/Latency-Headers-PoC) on why to add these headers.
