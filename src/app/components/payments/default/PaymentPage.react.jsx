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

var CartInfo = require('./CartInfo.react.jsx');
var PaymentInfo = require('./PaymentInfo.react.jsx');
var PaymentMethod = require('./PaymentMethod.react.jsx');


var PaymentPage = React.createClass({

  	mixins: [State, ReactScriptLoader.ReactScriptLoaderMixin],

  	propTypes: {
  		user: ReactPropTypes.object,
  		product: ReactPropTypes.object,
  		errors: ReactPropTypes.array,
  		messages: ReactPropTypes.array
  	},

	getInitialState: function() {
    	console.log('PaymentPage.react: getInitialState');
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
    	console.log('PaymentPage.react: componentDidMount');
	},

	componentWillUnmount: function() {
    	console.log('PaymentPage.react: componentWillUnmount');
	},

	_onChange: function() {
    	console.log('PaymentPage.react: _onChange');
	},
 
	getScriptURL: function() {
		return '/assets/scripts/init-product.min.js';
	},

	// ReactScriptLoaderMixin calls this function when the script has loaded
	// successfully.
	onScriptLoaded: function() {
		console.log('PaymentPage.react: onScriptLoaded');
	  	this.setState({scriptLoading: false});
	},

	// ReactScriptLoaderMixin calls this function when the script has failed to load.
	onScriptError: function() {
		console.log('PaymentPage.react: onScriptLoaded');
		this.setState({scriptLoading: false, scriptLoadError: true});
	},

	onScriptTagCreated: function() {
		console.log('PaymentPage.react: onScriptTagCreated');
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
					<div className="col-xs-12 col-sm-6">
						<CartInfo {...this.props} />
					</div>
					<div className="col-xs-12 col-sm-6">
						<PaymentInfo {...this.props} />
					</div>
					<div className="col-xs-12">
						<PaymentMethod {...this.props} />
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


module.exports = PaymentPage;