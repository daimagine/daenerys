var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var AppConstants = require('../constants/AppConstants.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = AppConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _product = null;
var _affiliate = null;
var _affiliator = null;
var _customer = null;
var _errors = [];
var _messages = [];


var AffiliateStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getErrors: function() {
  	return _errors;
  },

  getMessages: function() {
  	return _messages;
  },

  getProduct: function() {
  	return _product;
  },

  getAffiliate: function() {
  	return _affiliate;
  },

  getCustomer: function() {
  	return _customer;
  },

  getAffiliator: function() {
  	return _affiliator;
  },

  getServerResponses: function(action) {
	if (action.errors) {
		_errors = action.errors;
	} else {
		_errors = [];
	}
	console.log('AffiliateStore: errors', _errors);
	if (action.messages) {
		_messages = action.messages;
	} else {
		_messages = [];
	}
	console.log('AffiliateStore: messages', _messages);
  },

});

AffiliateStore.dispatchToken = AppDispatcher.register(function(payload) {
	var action = payload.action;
	switch(action.type) {
		case ActionTypes.RECEIVE_AFFILIATE_PRODUCT:
			console.log('AffiliateStore: RECEIVE_AFFILIATE_PRODUCT');
			if (action.json && action.json.affiliate) {
				_affiliate = action.json.affiliate;
				_product = _affiliate.product;
				_affiliator = _affiliate.customer;
				_customer = _product.customer;
			}
			AffiliateStore.getServerResponses(action);
			AffiliateStore.emitChange();
			break;
	}

	return true;
});

module.exports = AffiliateStore;