var React = require('react');
var Router = require('react-router');
var State = Router.State;
var Link = Router.Link;
var ReactPropTypes = React.PropTypes;
var ReactBootstrap = require('react-bootstrap')
	, Modal = ReactBootstrap.Modal
	, Button = ReactBootstrap.Button
	, Input = ReactBootstrap.Input;
var ReactScriptLoader = require('react-script-loader');

var Header = require('../../../components/common/Header.react.jsx');
var ErrorNotice = require('../../../components/common/ErrorNotice.react.jsx');
var MessageNotice = require('../../../components/common/MessageNotice.react.jsx');

var ProductCarousel = require('./ProductCarousel.react.jsx');
var ProductDescription = require('./ProductDescription.react.jsx');
var ProductOverview = require('./ProductOverview.react.jsx');
var ProductPaymentMethod = require('./ProductPaymentMethod.react.jsx');
var ProductCustomerSocmed = require('./ProductCustomerSocmed.react.jsx');


var ProductPage = React.createClass({

  	mixins: [State, ReactScriptLoader.ReactScriptLoaderMixin],

  	propTypes: {
  		affiliate: ReactPropTypes.object,
		affiliator: ReactPropTypes.object,
  		product: ReactPropTypes.object,
  		errors: ReactPropTypes.array,
  		messages: ReactPropTypes.array
  	},

	getInitialState: function() {
    	console.log('ProductPage.react: getInitialState');
    	return {
    		errors: [],
    		messages: [],
    		scriptLoading: true,
    		scriptLoadError: false
    	}
	},

	componentWillReceiveProps: function(nextProps) {
		this.setState({
			errors: nextProps.errors,
			messages: nextProps.messages
		});
	},

	componentDidMount: function() {
    	console.log('ProductPage.react: componentDidMount');
	},

	componentWillUnmount: function() {
    	console.log('ProductPage.react: componentWillUnmount');
	},

	_onChange: function() {
    	console.log('ProductPage.react: _onChange');
	},
 
	getScriptURL: function() {
		return '/assets/scripts/init-product.min.js';
	},

	// ReactScriptLoaderMixin calls this function when the script has loaded
	// successfully.
	onScriptLoaded: function() {
		console.log('ProductPage.react: onScriptLoaded');
	  	this.setState({scriptLoading: false});
	},

	// ReactScriptLoaderMixin calls this function when the script has failed to load.
	onScriptError: function() {
		console.log('ProductPage.react: onScriptLoaded');
		this.setState({scriptLoading: false, scriptLoadError: true});
	},

	onScriptTagCreated: function() {
		console.log('ProductPage.react: onScriptTagCreated');
	},

	render: function() {
		var content = (
			<div className="col-xs-12">
				<div className="alert alert-info" role="alert">
	              Informasi produk sedang disiapkan...
	            </div>
	        </div>
		);
		if (!this.state.scriptLoading && this.props.product) {
			content = (
				<div>
					<div className="col-xs-12 col-sm-7">
						<ProductCarousel {...this.props} />
						<ProductDescription {...this.props} />
					</div>
					<div className="col-xs-12 col-sm-5">
						<ProductOverview {...this.props} />
						<ProductPaymentMethod {...this.props} />
						<ProductCustomerSocmed {...this.props} />
					</div>
				</div>
			);
		}

    	return (
			<div>
				<Header {...this.props} />
				<a href="javascript:;" className="scrollup">Scroll</a>
				<div className="container">
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
				          	{ content }
				        </div>
					</div>
				</div>
			</div>
		);
	}

});


module.exports = ProductPage;