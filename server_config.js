'use strict';
let koa       = require('koa'),
    router    = require('koa-router'),
    serve     = require('koa-static'),
    views     = require('co-views'),
    compress  = require('koa-compress');

export default function(app, options = {}) {
  var DEFAULT_PORT = 4000;

  app.use(compress(
    {
      flush: require('zlib').Z_SYNC_FLUSH
    }
  ));

  app.use(serve(__dirname + '/public'));

  app.use(router(app));  

  app.listen(options.port || DEFAULT_PORT, function() {
    console.log(`Koa appplication render service listens on port ${PORT}`);
  });  
}
