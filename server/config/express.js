var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser');
    

module.exports = function(app, config) {
  function compile(str, path) {
    return stylus(str).set('filename', path);
  }

  app.set('views', config.rootPath + '/server/views');
  app.set('view engine', 'pug');
  app.use(logger('dev'));
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());
  app.use(stylus.middleware(
    {
      src: config.rootPath + '/public',
      compile: compile
    }
  ));
  app.use(express.static(config.rootPath + '/public'));
}