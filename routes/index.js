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
    config: config.favicon
  },
  {
    method: 'GET',
    path: '/public/images/{path*}',
    config: config.images
  },
  {
    method: 'GET',
    path: '/public/styles/css/{path*}',
    config: config.css
  },
  {
    method: 'GET',
    path: '/public/js/{path*}',
    config: config.js
  }
]
