var React = require('react');
var Router = require('react-router');
var State = Router.State;
var Link = Router.Link;
var ReactPropTypes = React.PropTypes;
var ReactBootstrap = require('react-bootstrap')
	, Modal = ReactBootstrap.Modal
	, Button = ReactBootstrap.Button
	, Input = ReactBootstrap.Input;
var AppConstants = require('../../constants/AppConstants.js')	
	, ProductCategory = AppConstants.ProductCategory;


var ProductOverview = React.createClass({
	propsTypes: {
		product: ReactPropTypes.object
	},
	render: function() {
		var categoryEntity = (<div></div>);
		if (this.props.product.category.id == ProductCategory.Digital) {
			categoryEntity = (<DigitalEntity />);
		} else if (this.props.product.category.id == ProductCategory.Retail) {
			categoryEntity = (<RetailEntity />);
		} else if (this.props.product.category.id == ProductCategory.Ticket) {
			categoryEntity = (<TicketEntity />);
		}
		return(
			<div className="grid simple">
				<div className="grid-title">
					<h4>Informasi <span className="semi-bold">Harga</span></h4>
				</div>
				<div className="grid-body">
					<div className="entitites">
						<div className="icon"><span className="fa fa-tag"></span></div>
						<div className="entity-content">
							<p>Rp. {this.props.product.price}</p>
						</div>
					</div>
					{categoryEntity}
				</div>
			</div>
		);
	}
});

var DigitalEntity = React.createClass({
	render: function() {
		return(
			<div className="entitites">
				<div className="icon"><span className="fa fa-cloud-download"></span></div>
				<div className="entity-content">
					<p>Produk Digital</p>
				</div>
			</div>
		);
	}
});

var RetailEntity = React.createClass({
	render: function() {
		return(
			<div className="entitites">
				<div className="icon"><span className="fa fa-cubes"></span></div>
				<div className="entity-content">
					<p>Produk Fisik</p>
				</div>
			</div>
		);
	}
});

var TicketEntity = React.createClass({
	render: function() {
		return(
			<div className="entitites">
				<div className="icon"><span className="fa fa-ticket"></span></div>
				<div className="entity-content">
					<p>Tiket</p>
				</div>
			</div>
		);
	}
});


module.exports = ProductOverview;