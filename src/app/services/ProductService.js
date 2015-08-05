var ServerActionCreators = require('../actions/ServerActionCreators.react.jsx');
var AppConstants = require('../constants/AppConstants.js');
var WebAPIUtils = require('../utils/WebAPIUtils');
var APIEndpoints = AppConstants.APIEndpoints;
var request = WebAPIUtils.api.request;


module.exports = {

  loadProduct: function(productId) {
    console.log('ProductService: loadProduct');
    request.get(APIEndpoints.PRODUCTS + '/' + productId)
      .type('application/json')
      .end(function(error, res) {
        if (res) {
          console.log(res);
          if (res.error) {
            var errorMsgs = WebAPIUtils.getErrors(res);
            ServerActionCreators.receiveProduct(null, errorMsgs);
          } else {
            var json = res.body;
            ServerActionCreators.receiveProduct(json, null);
          }
        }
      });
  },

};

