var keyMirror = require('keymirror');

var AppRoot = "http://127.0.0.1:3334/";
var APIRoot = "http://localhost:3000/api/v1";

module.exports = {

  APIEndpoints: {
    PRODUCTS:  APIRoot + "/products",
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
    // Products
    LOAD_PRODUCTS: null,
    RECEIVE_PRODUCTS: null,
    LOAD_PRODUCT: null,
    RECEIVE_PRODUCT: null,
  })

};