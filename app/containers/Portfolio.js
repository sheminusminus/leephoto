import React from 'react';
import Gallery from './Gallery';
import CoverGallery from './CoverGallery';
import Header from '../components/Header';
import Subheader from '../components/Subheader';
import Modal from './Modal';
import About from './About';
import Contact from './Contact';

var Portfolio = React.createClass({
	getInitialState() {
		return {
			galleryPaths: require('../../data/data.json'),
			galleryNames: this.getGalleryNames(require('../../data/data.json')),
			images: [],
			currentIndex: 0,
			modalClass: 'modal closed',
			selectedImage: ' ',
			showing: 0,
			coverGallery: true
		};
	},
	getIndex() {
		return this.state.currentIndex;
	},
	pullDirectoryNames() {
		var dirs = [];
		for (var i = 0; i < imageData.length; i++) {
			dirs.push(imageData[i]);
		}
		console.log(dirs);
		return dirs;
	},
	getNameStrings() {
		var names = [];
		for (var i = 0; i < imageData.length; i++) {
			names.push(imageData[i].split('/')[1]);
		}
		console.log(names);
		return names;	
	},
	getCurrentDirName(idx) {
		var data = imageData[idx];
		var name = data.split('/')[1];		
		console.log(name);
		return name;
	},
	getPathBase(idx) {
		var base =imageData[idx] + '/';
		console.log(base);
		return base;
	},
	pullImagePaths() {
		var paths = [];
		
		return paths;	
	},
	getImagePath() {
		var path = this.state.pathBase;
		var images = this.state.filePaths.map(function(item, index) {
			return  path + item;
		});

	},
	refreshPortfolio() {
		console.log('refresh');
		this.setState({
			currentIndex: 0
		});
		window.location.reload();
	},
	about() {
		
	},
	contact() {
		
	},
	getOtherData(d) {
		var files = [];
		for (var i = 0; i < d.length; i++) {
			files.push('data/' + d[i].split('/')[1] + '.json');
		}
		return files;
	},
	getGalleryNames(g) {
		var gals = [];
		for (var i = 0; i < g.length; i++) {
			gals.push(g[i].split('/')[1]);
		}
		return gals;
	},
	changeGallery(evt) {
		var name = evt.target.value;
		var idx = this.state.galleryNames.indexOf(name);
		this.setState({
			coverGallery: false,
			currentIndex: idx
		});
	},
	handleOpenViewer(evt) {
		document.querySelector('#modal-viewer').classList.remove('closed');
		this.setState({
			selectedImage: evt.target.src
		});
	},
	getSelectedImage() {
		return this.state.selectedImage;
	},
	handleCloseViewer(evt) {
		document.querySelector('#modal-viewer').classList.add('closed');
	},
	handleAbout() {
		this.setState({
			showing: 1
		});
	},
	handleContact() {
		this.setState({
			showing: 2
		});	
	},
	handleCloseInfo() {
		this.setState({
			showing: 0
		});	
	},
	switchGallery(evt) {
		var galName = evt.target.getAttribute('data-galleryname');
		var idx = this.state.galleryNames.indexOf(galName);
		console.log(galName);	
		this.setState({
			coverGallery: false,
			currentIndex: idx
		});
		
	},
	render() {
		var modalView = [];
		var galleryShowing = [];
		var current = this.getIndex();
		var galleryPaths = require('../../data/data.json');
		var imageJSONFiles = this.getOtherData(galleryPaths);
		var galleryNames = this.getGalleryNames(galleryPaths);
		var imageDataFiles = require('../../data/' + galleryNames[current] + '.json');
		var modalClass = this.state.modalClass;
		var modalSrc = this.getSelectedImage();
		if (this.state.coverGallery) {
			galleryShowing.push(
				<CoverGallery galleries={galleryPaths} switchGallery={this.switchGallery}/>
			);
		}
		else {
			galleryShowing.push(
				<Gallery srcPaths={imageDataFiles} current={current} />
			);
		}
		if (this.state.showing === 1) {
			modalView.push(
				<About close={this.handleCloseInfo} />
			);
		}
		if (this.state.showing === 2) {
			modalView.push(
				<Contact close={this.handleCloseInfo} />	
			);
		}
		return (
			<div className="portfolio">
				<Header handlePortfolio={this.refreshPortfolio} handleAbout={this.handleAbout} handleContact={this.handleContact} />
				<Subheader galleries={galleryNames} current={current} handleSelection={this.changeGallery} />
				{galleryShowing}
				{modalView}
			</div>
		)
	}
});

export default Portfolio;