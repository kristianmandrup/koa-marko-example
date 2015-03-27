'use strict';
let koa       = require('koa');

import render from './lib/render';
import data   from './lib/data'
import utils  from './lib/utils'
import config from './lib/server_config';

let app         = config(koa(), {port: 4000});
let appUtils    = utils(app);
let createRoute = appUtils.createRoute;

createRoute('index', '/');

for (let route of ['prematch', 'live', 'casino'])
  createRoute(route);
