var React = require('react');
var ReactPropTypes = React.PropTypes;


var PaymentMethod = React.createClass({
  
  propsTypes: {
    product: ReactPropTypes.object
  },

  render: function() {
    return(
      <div className="grid simple">
        <div className="grid-title">
          <h4>Metode Pembayaran</h4>
        </div>
        <div className="grid-body">
          <ul className="list-inline with-margin payment-method">
            <li><img src="/assets/images/logo-visa.png" /></li>
            <li><img src="/assets/images/logo-atmbersama.png" /></li>
            <li><img src="/assets/images/logo-prima.png" /></li>
            <li><img src="/assets/images/logo-mastercard.png" /></li>
          </ul>
        </div>
      </div>
    );
  }
});


module.exports = PaymentMethod;