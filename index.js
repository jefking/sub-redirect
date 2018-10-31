var http = require("http");

http.createServer(function (req, res) {
    let location = process.env.LOCATION;

    res.writeHead(301, { "Location": location });
    res.end();
    
}).listen(process.env.PORT || 3000);