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

  SocmedType: {
    Twitter: 1,
    Facebook: 2,
    FacebookPage: 3,
    Instagram: 4
  },

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