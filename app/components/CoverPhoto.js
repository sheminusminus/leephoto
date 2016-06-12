import React from 'react';

var CoverPhoto = React.createClass({
	render() {
		return (
			<div className="photo" onClick={this.props.switchGallery}>
				<img className="innerImg" src={this.props.srcPath} alt="portfolio image" data-galleryname={this.props.thisGallery} />
			</div>
		)
	}
});

export default CoverPhoto;