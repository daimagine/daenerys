var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var RouteStore = require('../stores/RouteStore.react.jsx');


var App = React.createClass({

  getInitialState: function() {
    console.log('App.react: getInitialState')
    return {}
  },

  render: function() {
    return (
      <RouteHandler {...this.props} />
    );
  }

});

module.exports = App;

