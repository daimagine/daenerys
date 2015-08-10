var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var AppConstants = require('../constants/AppConstants.js');

var ActionTypes = AppConstants.ActionTypes;

module.exports = {

  receiveAffiliateProduct: function(json, errors, messages) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_AFFILIATE_PRODUCT,
      json: json,
      errors: errors,
      messages: messages
    });
  },

};

