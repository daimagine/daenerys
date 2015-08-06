var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <header className="product-header">
        <div className="pull-left logo-container">
          <a href="javascript:;">
            <img src="/assets/images/logo.png" alt="" data-src="/assets/images/logo.png" 
              width="86" height="38" className="logo" />
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

