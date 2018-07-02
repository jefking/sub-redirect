var http = require("http");

http.createServer(function (req, res) {
    let subdomain = "www" + req.headers.host;

    res.writeHead(301, {"Location": subdomain});
    res.end();
}).listen(process.env.PORT || 3000);