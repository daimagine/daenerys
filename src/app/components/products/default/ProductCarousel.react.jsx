var React = require('react');
var ReactPropTypes = React.PropTypes;


var ProductCarousel = React.createClass({

	propTypes: {
		product: ReactPropTypes.object
	},

	componentDidMount: function() {
    	console.log('ProductCarousel.react: componentDidMount');
	},

	componentWillUnmount: function() {
    	console.log('ProductCarousel.react: componentWillUnmount');
	},

	_onChange: function() {
    	console.log('ProductCarousel.react: _onChange');
	},

	render: function() {
		var images = this.props.product.product_images;
		return (
			<div ref="product-carousel" id="product-carousel" >
				{ images.map(function(image, index) {
					return <ProductImage imageURL={image.link} key={"img-"+index} />
				}) }
			</div>
		);
	}

});

var ProductImage = React.createClass({
	render: function() {
		return(
			<div className="item">
				<img src="/assets/images/ajax-loader.gif"
	          		data-lazy={ this.props.imageURL }
	          		className="img-responsive center lazy" />
	        </div>
		);
	}
});

module.exports = ProductCarousel;