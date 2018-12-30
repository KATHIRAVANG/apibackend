var jsonServer=require('json-server');

var server = jsonServer.create(); // returns expressjs server
var router  = jsonServer.router('db.json');

server.use(jsonServer.defaults);

server.use(router);

console.log("loading");
server.listen(1337);
