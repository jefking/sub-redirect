var http = require("http");

http.createServer(function (req, res) {
    let sub = process.env.SUBDOMAIN || "www";
    let protocol = process.env.PROTOCOL || "http";

    let location = protocol + "://" + sub + "." + req.headers.host;

    if (req.url)
    {
        location += "/" + req.url;
    }

    res.writeHead(301, { "Location": location });
    res.end();
}).listen(process.env.PORT || 3000);