var React = require('react');
var ReactPropTypes = React.PropTypes;
var StringUtils = require('../../../utils/StringUtils.js');


var ProductDescription = React.createClass({
	propsTypes: {
		product: ReactPropTypes.object
	},

	componentDidMount: function() {
    	console.log('ProductDescription.react: componentDidMount')
	},

	componentWillUnmount: function() {
    	console.log('ProductDescription.react: componentWillUnmount')
	},

	render: function() {
		var content = <div></div>;
		var names = StringUtils.split2(this.props.product.name);
		var seller = StringUtils.split2(this.props.product.customer.name);

		return (
			<div ref="product-description" id="product-description">
	            <ul id="tab-01" className="nav nav-tabs">
	              <li className="active">
	              	<a href="#product-tab-00" aria-controls="product-tab-00" 
	              		role="tab" data-toggle="tab">
	              		Deskripsi
	              	</a>
	              </li>
	              <li>
	              	<a href="#product-tab-01" aria-controls="product-tab-01"
	              		role="tab" data-toggle="tab">
	              		Info Penjual
	              	</a>
	              </li>
	            </ul>
	            <div className="tab-content">
	              <div id="product-tab-00" className="tab-pane active">
	                <div className="row">
	                  <div className="col-md-12">
	                    <h4>{names[0]}&nbsp;<span className="semi-bold">{names[1]}</span></h4>
	                    <hr />
	                    <p>{ this.props.product.description }</p>
	                  </div>
	                </div>
	              </div>
	              <div id="product-tab-01" className="tab-pane">
	                <div className="row">
	                  <div className="col-md-12">
	                    <h4>{seller[0]}&nbsp;<span className="semi-bold">{seller[1]}</span></h4>
	                    <hr />
	                    <div className="entitites">
		                  <div className="icon"><span className="fa fa-envelope-o"></span></div>
		                  <div className="entity-content">
		                    <p>{this.props.product.customer.email}</p>
		                  </div>
		                </div>
	                    <div className="entitites">
		                  <div className="icon"><span className="fa fa-phone"></span></div>
		                  <div className="entity-content">
		                    <p>{this.props.product.customer.mobile_no}</p>
		                  </div>
		                </div>
	                    <div className="entitites">
		                  <div className="icon"><span className="fa fa-building-o"></span></div>
		                  <div className="entity-content">
		                    <p>{this.props.product.customer.address}</p>
		                  </div>
		                </div>
	                  </div>
	                </div>
	              </div>
	            </div>
			</div>
		);
	}

});

module.exports = ProductDescription;