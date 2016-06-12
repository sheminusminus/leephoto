var fs = require('fs');
var dir = require('node-dir');
var direct = 'images/';

var directories = [];
var paths = [];

fs.writeFile(__dirname + '/data/data.json', ' ', function(err) {
	if (err) {
		console.error(err);
	}
});

var dirList = dir.subdirs(direct, function(err, subdirs) {
	if (err) {
		return console.error(err);
	}
	
	addDirs(subdirs);
	
	subdirs.forEach(function(subdir){
		
		fs.stat(subdir, function(err, subStats) {
			if (err) {
				return console.error(err);
			}
			
			var subdirName = subdir.split('/')[1];
			
			fs.writeFile('data/' + subdirName + '.json', ' ', function(err) {
				if (err) {
					console.error(err);
				}
			});
			
			if (subStats.isDirectory()) {
				console.log(subdir);
				//listing(subdir);
				
				var newPath = subdir + '/';
				
				dir.files(newPath, function(err, files) {
					if (err) {
						return console.error(err);
					}
					addPaths(subdirName, files);
			
				});
				
			}
			
		});
		
	});
});

function addDirs(sd) {
	fs.writeFile(__dirname + '/data/data.json', JSON.stringify(sd), function(err) {
		if (err) {
			console.log(err);
		}
	});
}

function addPaths(sn, p) {
	for (var i = 0; i < p.length; i++) {
		//var extString = p[i].substring(p[i].length - 4, p[i].length - 1);
		if (p[i] == 'images/' + sn + '/.DS_Store') {
			p.shift();
		}
		var ext = p[i].split('.')[1].toLowerCase();
		if (ext == 'jpg' || ext == 'png' || ext == 'jpeg') {
			paths.push(p[i]);
		}
	}
	console.log(p);
	fs.appendFile(__dirname + '/data/' + sn + '.json', JSON.stringify(p), function(err) {
		if (err) {
			console.error(err);
		}
	});
}