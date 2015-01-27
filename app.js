var Path = require("path");
var Hapi = require("hapi");
var NunjucksHapi = require("nunjucks-hapi");
var moment = require("moment");

var viewPath = Path.join(__dirname, 'views');
var env = NunjucksHapi.configure(viewPath);

env.addFilter('log', function(data) {
  console.log(data);
});

env.addFilter('json', function(data) {
  return JSON.stringify(data);
});

env.addFilter('date', function(data, format) {
  return moment(data).format(format);
});


var server = new Hapi.Server();

server.connection({
  port: Number(process.argv[2] || 8080),
  host: "localhost"
});


server.views({
  engines: {
    html: NunjucksHapi
  },
  path: viewPath
});

server.route(require('./routes'));

server.start(function(){
  console.log("Server listening on port " + server.info.port);
});
