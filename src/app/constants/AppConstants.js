var keyMirror = require('keymirror');
var Config = require('config');

module.exports = {

  APIEndpoints: {
    AFFILIATE_PRODUCT:  Config.APIRoot + "/affiliate_product",
  },

  ProductCategory: {
    Digital: 1,
    Retail: 2,
    Ticket: 3
  },

  SocmedType: Config.SocmedType,

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  }),

  ActionTypes: keyMirror({
    // Affiliate
    LOAD_AFFILIATE_PRODUCT: null,
    RECEIVE_AFFILIATE_PRODUCT: null,
  })

};