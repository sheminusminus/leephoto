import React from 'react';
import CoverPhoto from '../components/CoverPhoto';

var CoverGallery = React.createClass({
	makeImages() {
		var images = [];
		for (var i = 0; i < this.props.galleries.length; i++) {
			var k = 'img' + i;
			var string = this.props.galleries[i] + '/cover.jpg';
			//var ext = string.substring(string.length - 3, string.length).toLowerCase();
			images.push(
					<CoverPhoto srcPath={string} key={k} index={i} thisGallery={this.props.galleries[i].split('/')[1]} switchGallery={this.props.switchGallery}/>	
			);
		}
		return images;
	},
	render() {
		var images = this.makeImages();
		return (
			<div className="gallery">
				<div className="coverGalleryHeader"><h3>Photo Galleries</h3></div>
				{images}
			</div>
		)
	}
});

export default CoverGallery;