import React from 'react';

var Header = React.createClass({
	render() {
		return (
			<div className="header">
				<div className="namespace" onClick={this.props.handlePortfolio}>
					<h2 className="h2"><span className="text">Lee Presser</span></h2>
					<h3 className="h3"><span className="text">Photo Studio</span></h3>
				</div>
				<div className="menuspace">
					<div className="menu">
						<h4 onClick={this.props.handlePortfolio}>Main</h4> <h4 onClick={this.props.handleAbout}>About</h4> <h4 onClick={this.props.handleContact}>Contact</h4>
					</div>
				</div>
			</div>
		)
	}
});

export default Header;