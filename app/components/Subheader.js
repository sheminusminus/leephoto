import React from 'react';

var Subheader = React.createClass({
	makeOptions() {
		var opts = [];
		var galleries = this.props.galleries;
		for (var i = 0; i < galleries.length; i++) {
			var k = 'opt' + i;
			opts.push(
				<option key={k} value={galleries[i].toString()} index={i}>{galleries[i].toString()}</option>	
			);
		}
		return opts;
	},
	render() {
		var opts = this.makeOptions();
		return (
			<div className="subheader">
				<select id="gallery-select" className="gallerySelect" onChange={this.props.handleSelection}>
					<option key="defaultopt" value="Photo Sets">[ Jump to Gallery ]</option>
					{opts}
				</select>
			</div>
		)
	}
});

export default Subheader;