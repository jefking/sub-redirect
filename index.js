var http = require("http");

http.createServer(function (req, res) {
    res.writeHead(301, {"Location": "http://jefking.me"});
    res.end();
}).listen(80);