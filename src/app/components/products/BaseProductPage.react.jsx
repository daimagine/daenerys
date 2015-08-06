var React = require('react');
var Router = require('react-router');
var State = Router.State;
var ReactPropTypes = React.PropTypes;

var ProductStore = require('../../stores/ProductStore.react.jsx');
var ProductActionCreators = require('../../actions/ProductActionCreators.react.jsx');


var BaseProductPage = React.createClass({

	mixins: [State],

	statics: {
		willTransitionTo: function(transition) {
			console.log('BaseProductPage.react: intercepting transition path', transition.path);
		}
	},

	getInitialState: function() {
    	console.log('BaseProductPage.react: getInitialState')
		return {
			hashedId: this.getParams().productId,
			product: ProductStore.getProduct(),
			errors: [],
			messages: [],
			template: 'default'
		}
	},

	componentDidMount: function() {
    	console.log('BaseProductPage.react: componentDidMount')
		ProductStore.addChangeListener(this._onChange);
		ProductActionCreators.loadProduct(this.getParams().productId);
	},

	componentWillUnmount: function() {
    	console.log('BaseProductPage.react: componentWillUnmount')
		ProductStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
    	console.log('BaseProductPage.react: _onChange');
    	var template = this.state.template;
    	var product = ProductStore.getProduct();
    	if (product) {
	    	var customer = product.customer;
	    	if (customer.template) {
	    		template = customer.template;
	    	}
	    	// add style
	    	var style = document.createElement('link');
	    	style.setAttribute('type', 'text/css');
	    	style.setAttribute('rel', 'stylesheet');
	    	style.setAttribute('href', '/assets/css/products/' + template + '.min.css');
	    	document.head.appendChild(style);
	    	console.log('BaseProductPage.react: adding custom style', style);
    	}
		this.setState({
			product: ProductStore.getProduct(),
			errors: ProductStore.getErrors(),
			messages: ProductStore.getMessages(),
			template: template
		});
	},

	render: function() {
    	var template = this.state.template;
    	var ProductComponent = require('./' + template + '/ProductPage.react.jsx');

    	return (
    		<ProductComponent {...this.props} 
    			hashedId={this.state.hashedId}
    			errors={this.state.errors}
    			messages={this.state.messages}
    			product={this.state.product} />
		);
	}

});


module.exports = BaseProductPage;