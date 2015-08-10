var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var AppConstants = require('../constants/AppConstants.js');
var AffiliateService = require('../services/AffiliateService.js');

var ActionTypes = AppConstants.ActionTypes;

module.exports = {

  loadAffiliateProduct: function(token) {
    AffiliateService.loadAffiliateProduct(token);
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_AFFILIATE_PRODUCT,
      token: token
    });
  },

};

