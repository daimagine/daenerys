var React = require('react');
var Router = require('react-router');
var State = Router.State;
var Link = Router.Link;
var ReactPropTypes = React.PropTypes;
var ErrorNotice = require('../../components/common/ErrorNotice.react.jsx');
var MessageNotice = require('../../components/common/MessageNotice.react.jsx');
var ReactBootstrap = require('react-bootstrap')
	, Modal = ReactBootstrap.Modal
	, Button = ReactBootstrap.Button
	, Input = ReactBootstrap.Input;

var ProductStore = require('../../stores/ProductStore.react.jsx')
var ProductActionCreators = require('../../actions/ProductActionCreators.react.jsx');

var ProductCarousel = require('./ProductCarousel.react.jsx');
var ProductDescription = require('./ProductDescription.react.jsx');
var ProductOverview = require('./ProductOverview.react.jsx');
var ProductPaymentMethod = require('./ProductPaymentMethod.react.jsx');


var ProductPage = React.createClass({

  	mixins: [AuthenticatedMixin, State, ReactScriptLoader.ReactScriptLoaderMixin],

	getInitialState: function() {
    	console.log('ProductDetailPage.react: getInitialState')
		return {
			product: ProductStore.getProduct(), // get form product store
			errors: [],
			messages: [],
		}
	},

	componentDidMount: function() {
    	console.log('ProductDetailPage.react: componentDidMount')
		ProductStore.addChangeListener(this._onChange);
		ProductActionCreators.loadProduct(this.getParams().productId);
	},

	componentWillUnmount: function() {
    	console.log('ProductDetailPage.react: componentWillUnmount')
		ProductStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
    	console.log('ProductDetailPage.react: _onChange');

		this.setState({
			product: ProductStore.getProduct(),
			errors: ProductStore.getErrors(),
			messages: ProductStore.getMessages()
		});
	},

	render: function() {
    	return (
			<div className="product-content">
				<div className="row">
					<div className="col-md-12">
	              		<MessageNotice messages={this.state.messages}/>
	              	</div>
            		<div className="col-md-12">
	              		<ErrorNotice errors={this.state.errors}/>
	              	</div>
	          	</div>
	          	<div className="row">
		          	{ this.state.product ? (
							<div>
								<div className="col-xs-12 col-sm-7">
									<ProductCarousel product={this.state.product} />
									<ProductDescription product={this.state.product} />
								</div>
								<div className="col-xs-12 col-sm-5">
									<ProductOverview product={this.state.product} />
									<ProductPaymentMethod product={this.state.product} />
								</div>
							</div>
						) : (
							<div class="col-xs-12">
								<div className="alert alert-info" role="alert">
					              Informasi produk sedang disiapkan...
					            </div>
					        </div>
						)
					}
	          	</div>
			</div>
		);
	}

});


module.exports = ProductPage;