import React from 'react';

var Contact = React.createClass({
	render() {
		return (
			<div className="contact">
				<span className="closeBox" onClick={this.props.close}><span className="closeIcon">&times;</span></span>
				<p className="aboutLee">
					Here is a some contact information.
				</p>
			</div>
		)
	}
});

export default Contact;