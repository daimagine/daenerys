var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var App = require('./components/App.react.jsx');
var HomePage = require('./components/dashboard/HomePage.react.jsx');
var ProductPage = require('./components/products/ProductPage.react.jsx');


module.exports = (
  <Route name="app" handler={App}>
    <DefaultRoute handler={HomePage}/>
    <Route name="product" path="/products/:productId" handler={ProductPage}/>
  </Route>
);