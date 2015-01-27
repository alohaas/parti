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
  public: {
    handler: {
      directory: { path: 'public' }
    },
    id: 'public'
  }
}
