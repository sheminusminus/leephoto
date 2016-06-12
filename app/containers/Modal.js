import React from 'react';

var Modal = React.createClass({
	render() {
		return (
			<div id={this.props.id} className={this.props.modalClasses} onClick={this.props.closeViewer}>
				<div className="modalFg">
					<img src={this.props.imageSrc} onClick={this.props.closeViewer} className="modalPhoto" id={this.props.imgId} />
				</div>
			</div>
		)
	}
});

export default Modal;