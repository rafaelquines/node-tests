"use strict"

var restify = require('restify');
var echoRoute = require('./routes/echo');
var server = restify.createServer({
  name: 'testrestify',
  version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.use(function(req, res, next) {
    console.log('req: ' + req.path() + '?' + req.getQuery());
    console.log('Use geral');
    if(next) next();
});


server.get('/echo/:name', echoRoute.getEcho, function(req2, res2, next) {
    console.log('no 2º: ' + res2.statusCode);
    // res2.end();
    if(next) next();
    // else {
    //     res.end();
    // }
});

//
// server.get('/echo/:name', function (req, res, next) {
//   console.log('aqui agora');
//   if(next) next();
// });

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});
