// require.context('./core', true, /^.*$/)


global.$ = window.$ = window.jQuery = require('jquery');
window._ = require('lodash');
window.Backbone = require('backbone');
window.Backbone.$ = window.jQuery; //wat
window.createjs = require('../vendor/scripts/createjs.combined.js').createjs;
window.tv4 = require('tv4');
window.lscache = require('lscache');
window._.string = require('underscore.string');
require('jquery.browser');
window.marked = require('marked');
require('../bower_components/validated-backbone-mediator/backbone-mediator.js');
require('../bower_components/treema/treema.js');
window.TreemaUtils = require('../bower_components/treema/treema-utils.js');
window.moment = require('moment');
window.$.i18n = require('../bower_components/i18next/i18next.js');
require('../vendor/scripts/idle.js').createjs;
window.key = require('../vendor/scripts/keymaster.js');
require('../vendor/scripts/jquery.noty.packaged.min.js');
require('bootstrap/dist/js/bootstrap');
require('nanoscroller');


require('./core/Router.coffee');

require('core/initialize');
