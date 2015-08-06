var React = require('react');
var ReactPropTypes = React.PropTypes;
var AppConstants = require('../../../constants/AppConstants.js');
var SocmedType = AppConstants.SocmedType;


var ProductCustomerSocmed = React.createClass({
  
  propsTypes: {
    product: ReactPropTypes.object
  },

  render: function() {
    console.log('product customer socmed account', this.props.product.customer.socmed_accounts);
    return(
      <div className="grid simple">
        <div className="grid-title">
          <h4>Social Media</h4>
        </div>
        <div className="grid-body">
          <ul className="list-inline with-margin">
            {this.props.product.customer.socmed_accounts.map(function(socmedAccount, index){
              return (
                <li>
                  { (() => {
                    switch(socmedAccount.social_media.id) {
                      case SocmedType.Twitter: 
                        return(
                            <a href={'https://twitter.com/' + socmedAccount.social_name} 
                              className="btn btn-twitter btn normal" target="_blank">
                                <span className="fa fa-twitter"></span>
                            </a>
                        );
                      case SocmedType.Facebook: 
                        return(
                            <a href={'https://facebook.com/' + socmedAccount.social_id} 
                              className="btn btn-facebook btn normal" target="_blank">
                                <span className="fa fa-facebook"></span>
                            </a>
                        );
                      case SocmedType.FacebookPage: 
                        return(
                            <a href={'https://facebook.com/' + socmedAccount.social_id} 
                              className="btn btn-facebook btn normal" target="_blank">
                                <span className="fa fa-facebook"></span>
                            </a>
                        );
                      case SocmedType.Instagram: 
                        return(
                            <a href={'https://instagram.com/' + socmedAccount.social_name} 
                              className="btn btn-instagram btn normal" target="_blank">
                                <span className="fa fa-instagram"></span>
                            </a>
                        );
                      default: return "";
                    }
                  })() }
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
});


module.exports = ProductCustomerSocmed;