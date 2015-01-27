var config = require( './config');

module.exports = [
  // VIEWS
  {
    method: "GET",
    path: "/",
    config: config.index
  },
  // ASSETS
  {
    method: 'GET',
    path: '/public/{path*}',
    config: config.public
  }
]
