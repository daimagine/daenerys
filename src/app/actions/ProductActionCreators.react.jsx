var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var AppConstants = require('../constants/AppConstants.js');
var ProductService = require('../services/ProductService.js');

var ActionTypes = AppConstants.ActionTypes;

module.exports = {

  loadProduct: function(productId) {
    ProductService.loadProduct(productId);
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_PRODUCT,
      productId: productId
    });
  },

};

