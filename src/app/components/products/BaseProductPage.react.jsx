var React = require('react');
var Router = require('react-router');
var State = Router.State;
var ReactPropTypes = React.PropTypes;

var AffiliateStore = require('../../stores/AffiliateStore.react.jsx');
var AffiliateActionCreators = require('../../actions/AffiliateActionCreators.react.jsx');


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
			hashedId: this.getParams().token,
			product: AffiliateStore.getProduct(),
			customer: AffiliateStore.getCustomer(),
			affiliate: AffiliateStore.getAffiliate(),
			affiliator: AffiliateStore.getAffiliator(),
			errors: [],
			messages: [],
			template: 'default'
		}
	},

	componentDidMount: function() {
    	console.log('BaseProductPage.react: componentDidMount')
		AffiliateStore.addChangeListener(this._onChange);
		AffiliateActionCreators.loadAffiliateProduct(this.getParams().token);
	},

	componentWillUnmount: function() {
    	console.log('BaseProductPage.react: componentWillUnmount')
		AffiliateStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
    	console.log('BaseProductPage.react: _onChange');
    	var template = this.state.template;
    	var customer = AffiliateStore.getCustomer();
    	if (customer) {
	    	if (customer.template) {
	    		template = customer.template;
	    	}
	    	// add template style
	    	var style = document.createElement('link');
	    	style.setAttribute('type', 'text/css');
	    	style.setAttribute('rel', 'stylesheet');
	    	style.setAttribute('href', '/assets/css/products/' + template + '.min.css');
	    	document.head.appendChild(style);
	    	console.log('BaseProductPage.react: adding custom style', style);

	    	// add twitter card
	    	/**
				<meta name="twitter:card" content="summary_large_image">
				<meta name="twitter:site" content="@jualio">
				<meta name="twitter:creator" content="@jualio">
				<meta name="twitter:title" content="">
				<meta name="twitter:description" content="">
				<meta name="twitter:image" content="">
	    	 **/
	    	var meta = document.createElement('meta');
	    	meta.setAttribute('twitter:card', 'summary_large_image');
	    	document.head.appendChild(meta);
	    	
	    	var meta = document.createElement('meta');
	    	meta.setAttribute('twitter:site', '@jualio');
	    	document.head.appendChild(meta);
	    	
	    	var meta = document.createElement('meta');
	    	meta.setAttribute('twitter:creator', '@jualio');
	    	document.head.appendChild(meta);
	    	
	    	var meta = document.createElement('meta');
			meta.setAttribute('twitter:title', AffiliateStore.getProduct().name);
			document.head.appendChild(meta);
	    	
	    	var meta = document.createElement('meta');
			meta.setAttribute('twitter:description', AffiliateStore.getProduct().description);
			document.head.appendChild(meta);

	    	var meta = document.createElement('meta');
			meta.setAttribute('twitter:image', AffiliateStore.getProduct().image);
			document.head.appendChild(meta);
    	}
		this.setState({
			product: AffiliateStore.getProduct(),
			customer: AffiliateStore.getCustomer(),
			affiliate: AffiliateStore.getAffiliate(),
			affiliator: AffiliateStore.getAffiliator(),
			errors: AffiliateStore.getErrors(),
			messages: AffiliateStore.getMessages(),
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
    			product={this.state.product} 
    			customer={this.state.customer}
    			affiliate={this.state.affiliate}
    			affiliator={this.state.affiliator} />
		);
	}

});


module.exports = BaseProductPage;