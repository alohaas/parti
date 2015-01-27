module.exports = {
  // VIEWS
  index: {
    handler: function(request, reply) {
      reply.view("index", {
        title: 'hapi parti'
      });
    },
    id: 'index'
  },
  // ASSETS
  favicon: {
    handler: {
      directory: { path: './public/favicon.png' }
    },
    id: 'favicon'
  },
  images: {
    handler: {
      directory: { path: './public/images' }
    },
    id: 'images'
  },
  css: {
    handler: {
      directory: { path: './public/styes/css' }
    },
    id: 'css'
  },
  js: {
    handler: {
      directory: { path: './public/js' }
    },
    id: 'js'
  }
}
