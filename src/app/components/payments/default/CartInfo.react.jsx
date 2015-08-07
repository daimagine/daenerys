var React = require('react');
var ReactPropTypes = React.PropTypes;
var Numeral = require('numeral');


var CartInfo = React.createClass({
	
	propTypes: {
		product: ReactPropTypes.object
	},

	_onAmountChange: function(e) {
		var amount = Number(e.target.value);
		if (amount < 1) {
			amount = 1;
		}
		var cart = this.state.cart;
		var price = this.props.product.price;
		cart.amount = amount;
		cart.total = amount * price;
		this.setState({ cart: cart });
	},

	_format: function(number) {
		return Numeral(number).format('0,0.00');
	},

	getInitialState: function() {
		return {
			cart: {
				amount: 1,
				total: this.props.product.price
			}
		}
	},

	render: function() {
		return(
			<div className="grid simple">
              <div className="grid-title">
                <h3>Keranjang Belanja Anda</h3>
              </div>
              <div className="grid-body">
                <table className="table no-more-tables clearfix">
                  <thead className="clearfix">
                    <tr>
                      <th className="text-center">Produk</th>
                      <th className="text-center" style={{ minWidth: '150px'}}>Harga</th>
                      <th className="text-center" width="10%">Jumlah</th>
                      <th className="text-center" style={{ minWidth: '150px'}}>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                      	<img src="/assets/images/loader.gif" 
                      		data-src={this.props.product.image} 
                      		className="lazy img-responsive" />
                      	<br />
                      	<span>{this.props.product.name}</span>
                      </td>
                      <td className="text-right">Rp. {this._format(this.props.product.price)}</td>
                      <td>
                        <input type="number" className="input-sm form-control no-padding" 
                        	value={this.state.cart.amount}
                        	onChange={this._onAmountChange}/>
                      </td>
                      <td className="text-right">Rp. {this._format(this.state.cart.total)}</td>
                    </tr>
                    <tr>
                      <td colSpan="3" className="hide-on-no-more"><strong>Subtotal</strong></td>
                      <td className="text-right">
                      	<strong>Rp. {this._format(this.state.cart.total)}</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
		);
	}
});

module.exports = CartInfo;
