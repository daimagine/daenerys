var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var ReactPropTypes = React.PropTypes;
var SessionActionCreators = require('../../actions/SessionActionCreators.react.jsx');
var ReactScriptLoader = require('react-script-loader');
var StringUtils = require('../../utils/StringUtils.js');

var Header = React.createClass({

  mixins: [ReactScriptLoader.ReactScriptLoaderMixin],

  propTypes: {
    isLoggedIn: ReactPropTypes.bool,
    user: ReactPropTypes.object
  },
  
  logout: function(e) {
    e.preventDefault();
    SessionActionCreators.logout();
  },

  getScriptURL: function() {
    return '/assets/scripts/init-product.min.js';
  },

  // ReactScriptLoaderMixin calls this function when the script has loaded
  // successfully.
  onScriptLoaded: function(url) {
    console.log('Header: onScriptLoaded ' + url);
      this.setState({scriptLoading: false});
  },

  // ReactScriptLoaderMixin calls this function when the script has failed to load.
  onScriptError: function() {
    console.log('Header: onScriptLoaded');
    this.setState({scriptLoading: false, scriptLoadError: true});
  },

  onScriptTagCreated: function() {
    console.log('Header: onScriptTagCreated');
  },

  render: function() {
    return (
      <header className="product-header">
        <div className="pull-left logo-container">
          <a href="javascript:;">
            <img src="/assets/images/logo.png" alt="" data-src="/assets/images/logo.png" 
              width="86" height="38" className="logo">
          </a>
        </div>
        <div className="pull-right button-container">
          <a href="javascript:;" className="btn btn-primary btn-normal">Mulai Jualan</a>
        </div>
      </header>
    );
  }
});

module.exports = Header;

