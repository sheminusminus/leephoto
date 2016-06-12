import React from 'react';

var About = React.createClass({
	render() {
		return (
			<div className="about">
				<span className="closeBox" onClick={this.props.close}><span className="closeIcon">&times;</span></span>
				<p className="aboutLee">
					Here is a paragraph of information about Lee Presser.
				</p>
			</div>
		)
	}
});

export default About;