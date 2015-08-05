var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppDispatcher = require('../dispatcher/AppDispatcher.js');

var Router = require('react-router');
var routes = require('../routes.jsx');

var AppConstants = require('../constants/AppConstants.js');
var ProductStore = require('../stores/ProductStore.react.jsx');

var router = Router.create({
  routes: routes,
  location: Router.HistoryLocation // Router.HistoryLocation
});

var ActionTypes = AppConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var RouteStore = assign({}, EventEmitter.prototype, {
  
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function() {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getRouter: function() {
    return router;
  },

  redirectHome: function() {
    router.transitionTo('app');
  }
});

RouteStore.dispatchToken = AppDispatcher.register(function(payload) {
  AppDispatcher.waitFor([
    ProductStore.dispatchToken
  ]);

  var action = payload.action;
  
  switch(action.type) {

    case ActionTypes.REDIRECT:
      console.log('RouterStore: REDIRECT')
      router.transitionTo(action.route);
      break;

    default:
  }
  
  return true;
});

module.exports = RouteStore;

