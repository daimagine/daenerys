var ServerActionCreators = require('../actions/ServerActionCreators.react.jsx');
var AppConstants = require('../constants/AppConstants.js');
var WebAPIUtils = require('../utils/WebAPIUtils');
var APIEndpoints = AppConstants.APIEndpoints;
var request = WebAPIUtils.api.request;


module.exports = {

  loadAffiliateProduct: function(token) {
    console.log('AffiliateService: loadAffiliateProduct');
    request.get(APIEndpoints.AFFILIATE_PRODUCT + '/' + token)
      .type('application/json')
      .end(function(error, res) {
        if (res) {
          console.log(res);
          if (res.error) {
            var errorMsgs = WebAPIUtils.getErrors(res);
            ServerActionCreators.receiveAffiliateProduct(null, errorMsgs);
          } else {
            var json = res.body;
            ServerActionCreators.receiveAffiliateProduct(json, null);
          }
        }
      });
  },

};

