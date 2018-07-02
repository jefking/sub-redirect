app.get ('/*', function (req, res, next){
    res.writeHead (301, {'Location': 'http://www.jefking.me'});
    
    if (!req.headers.host.match(/^www\./)){
        //res.writeHead (301, {'Location': 'http://www.jefking.me'});
    }
  });