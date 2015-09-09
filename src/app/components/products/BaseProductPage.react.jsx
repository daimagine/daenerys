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

	    	// add meta tags
	    	/**
				<!--Facebook-->
			    <meta property="og:site_name" content="Jualio" />
			    <meta property="og:url" content="https://p.jual.io/oqhgn0" />
			    <meta property="og:title" content="Langganan Majalah Marketeers 12 Edisi" />
			    <meta property="og:type" content="product" />
			    <meta property="og:image" content="https://i.jual.io/jualio-img-6cae5609-59a1-41a0-a97b-e166e2434b6d.jpg" />
			    <meta property="og:description" content="Langganan Majalah Marketeers 12 Edisi Rp. 500,000 Anda akan mendapatkan langganan majalah Marketeers selama 1 tahun &#x28;12 edisi&#x29; langsung ke tempat Anda&#x21; <br>
			<br>
			Free ongkir ke seluruh Indonesia selama satu tahun untuk Anda yang berlangganan majalah selama satu tahun. <br>
			<br>
			Majalah Marketeers merupakan majalah bulanan yang mengupas knowledge seputar New Wave Marketing. Majalah Marketeers juga merupakan majalah yang unik dan berbeda dengan majalah marketing lainnya.  Dilengkapi dengan case study lokal dan internasional&#44; ditunjungan oleh thought leadershio MarkPlus Consulting&#44; serta didukung oleh hasil riset MarkPlus Insight menjadikan majalah ini tidak hanya mengubah data menjadi informasi&#44; melainkan mengubah informasi menjadi knowledge bagi para pembacanya. " />
			    
			    <!--Twitter-->
			    <meta name="twitter:card" content="summary_large_image"> 
			    <meta name="twitter:site" content="@JualioID">
			                    <meta name="twitter:creator" content="@the_marketeers"> 
			    
			    <meta name="twitter:label1" content="Harga"> <!-- price -->
			    <meta name="twitter:data1" content="Rp. 500,000"> <!-- price-amount -->
			    <meta name="twitter:image" content="https://i.jual.io/jualio-img-6cae5609-59a1-41a0-a97b-e166e2434b6d.jpg">
			    
			    <meta name="twitter:description" content="Langganan Majalah Marketeers 12 Edisi Rp. 500,000 Anda akan mendapatkan langganan majalah Marketeers selama 1 tahun &#x28;12 edisi&#x29; langsung ke tempat Anda&#x21; <br>
			<br>
			Free ongkir ke seluruh Indonesia selama satu tahun untuk Anda yang berlangganan majalah selama satu tahun. <br>
			<br>
			Majalah Marketeers merupakan majalah bulanan yang mengupas knowledge seputar New Wave Marketing. Majalah Marketeers juga merupakan majalah yang unik dan berbeda dengan majalah marketing lainnya.  Dilengkapi dengan case study lokal dan internasional&#44; ditunjungan oleh thought leadershio MarkPlus Consulting&#44; serta didukung oleh hasil riset MarkPlus Insight menjadikan majalah ini tidak hanya mengubah data menjadi informasi&#44; melainkan mengubah informasi menjadi knowledge bagi para pembacanya. ">
			    <!--meta name="twitter:description" content="Anda akan mendapatkan langganan majalah Marketeers selama 1 tahun &#x28;12 edisi&#x29; langsung ke tempat Anda&#x21; <br>
			<br>
			Free ongkir ke seluruh Indonesia selama satu tahun untuk Anda yang berlangganan majalah selama satu tahun. <br>
			<br>
			Majalah Marketeers merupakan majalah bulanan yang mengupas knowledge seputar New Wave Marketing. Majalah Marketeers juga merupakan majalah yang unik dan berbeda dengan majalah marketing lainnya.  Dilengkapi dengan case study lokal dan internasional&#44; ditunjungan oleh thought leadershio MarkPlus Consulting&#44; serta didukung oleh hasil riset MarkPlus Insight menjadikan majalah ini tidak hanya mengubah data menjadi informasi&#44; melainkan mengubah informasi menjadi knowledge bagi para pembacanya. "-->
			    <meta name="twitter:title" content="Langganan Majalah Marketeers 12 Edisi">
			    <meta name="twitter:label2" content="Lokasi Barang"> <!-- custom -->
			    <meta name="twitter:data2" content="JAKARTA"> <!-- custom -->
			    <meta name="twitter:url" content="https://p.jual.io/oqhgn0">
			    <meta name="robots" content="index,follow" />
			    <meta name="googlebot" content="index,follow" />
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