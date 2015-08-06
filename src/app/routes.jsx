var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var App = require('./components/App.react.jsx');
var BaseProductPage = require('./components/products/BaseProductPage.react.jsx');
var BasePaymentPage = require('./components/payments/BasePaymentPage.react.jsx');


module.exports = (
  <Route name="app" handler={App}>
    <Route name="product" path="/products/:productId" handler={BaseProductPage} />
    <Route name="payment" path="/payments/:productId" handler={BasePaymentPage} />
  </Route>
);