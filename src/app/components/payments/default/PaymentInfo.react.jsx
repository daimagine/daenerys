var React = require('react');
var ReactPropTypes = React.PropTypes;


var PaymentInfo = React.createClass({

	propTypes: {
		product: ReactPropTypes.object
	},

	getInitialState: function() {
		return {
			agreement: false
		}
	},

	_onAgreementChange: function(e) {
		var checked = e.target.checked;
		this.setState({ agreement: checked });
	},

	render: function() {
		return(
			<div className="grid simple">
              <div className="grid-title">
                <h3>Data Pembeli</h3>
              </div>
              <div className="grid-body">
                <form id="payment" action="javascript:;">
                  <div className="row form-row">
                    <div className="col-xs-12 col-md-6">
                      <div className="form-group">
                        <label htmlFor="paymentName" className="form-label">Nama :</label>
                        <input id="paymentName" type="text" placeholder="Name lengkap Anda" className="form-control" />
                      </div>
                    </div>
                    <div className="col-xs-12 col-md-6">
                      <div className="form-group">
                        <label htmlFor="paymentEmail" className="form-label">Email :</label>
                        <input id="paymentEmail" type="email" placeholder="Email Anda" className="form-control" />
                      </div>
                    </div>
                    <div className="col-xs-12 col-md-6">
                      <div className="form-group">
                        <label htmlFor="paymentPhone" className="form-label">No. Telepon :</label>
                        <input id="paymentPhone" type="number" placeholder="contoh: +6281211110000" className="form-control" />
                      </div>
                    </div>
                    <div className="col-xs-12 col-md-6">
                      <div className="form-group">
                        <label htmlFor="paymentSex">Jenis Kelamin :
                          <select id="paymentSex" name="paymentSex" className="select2 form-control">
                            <option value="male">Pria</option>
                            <option value="female">Wanita</option>
                          </select>
                        </label>
                      </div>
                    </div>
                    <div className="col-xs-12">
                      <div className="form-group">
                        <div className="checkbox check-success">
                        <input id="paymentAgreement" type="checkbox" 
                        	onChange={this._onAgreementChange}
                        	defaultChecked={false} />
                        <label htmlFor="paymentAgreement">
                        	Dengan ini Saya menyetujui <a href="/terms" target="_blank">syarat &amp; ketentuan</a> yang berlaku
                        </label>
                      </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
		);
	}
});

module.exports = PaymentInfo;