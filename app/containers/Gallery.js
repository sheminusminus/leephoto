import React from 'react';
import Photo from '../components/Photo';

var Gallery = React.createClass({
	makeImages() {
		var images = [];
		var jsonPath = this.props.srcPaths[this.props.current];
		for (var i = 0; i < this.props.srcPaths.length; i++) {
			var k = 'img' + i;
			var string = this.props.srcPaths[i];
			var ext = string.substring(string.length - 3, string.length).toLowerCase();
			if (ext == 'jpg' || ext == 'png') {
				images.push(
					<Photo srcPath={this.props.srcPaths[i]} key={k} index={i} />	
				);
			}
		}
		return images;
	},
	render() {
		var images = this.makeImages();
		var name = this.props.srcPaths[0].split('/')[1];
		return (
			<div className="gallery">
				<div className="galleryHeader"><h3>{name}</h3></div>
				{images}
			</div>
		)
	}
});

export default Gallery;