import React from 'react';

var Photo = React.createClass({
	render() {
		return (
			<div className="photo">
				<a href={this.props.srcPath} data-lightbox="photo">
					<img className="innerImg" src={this.props.srcPath} alt="portfolio image" />
				</a>
			</div>
		)
	}
});

export default Photo;