var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var SessionStore = require('../stores/SessionStore.react.jsx');
var RouteStore = require('../stores/RouteStore.react.jsx');
var Header = require('../components/common/Header.react.jsx');


var App = React.createClass({

  getInitialState: function() {
    console.log('App.react: getInitialState')
    return {}
  },

  render: function() {
    return (
      <div>
        <Header {...this.props} />
        <a href="javascript:;" className="scrollup">Scroll</a>
        <div className="container">
          <RouteHandler {...this.props} />
        </div>
      </div>
    );
  }

});

module.exports = App;

