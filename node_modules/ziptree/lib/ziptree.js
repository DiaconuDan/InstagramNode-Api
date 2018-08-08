var admzip = require('adm-zip');

var Statics = {
	iterateSchema: function(tree, zipFile, path){
		for(var e in tree){
			if(Buffer.isBuffer(tree[e])){
				zipFile.addFile(path + e, tree[e]);
			}else if(typeof(tree[e]) == 'number'){
				zipFile.addFile(path + e, new Buffer(tree[e].toString()));
			}else if( typeof(tree[e]) == 'object' && !Array.isArray(tree[e]) ){
				zipFile.addFile(path + e + "/", new Buffer(0));
				Statics.iterateSchema(tree[e], zipFile, path + e + "/");
			}else{
				zipFile.addFile(path + e, new Buffer(tree[e]));
			}
		}
		return zipFile;
	}
}

var ziptree = function(tree){
	var typeofTree = typeof(tree);
	if(typeofTree != 'object'){
		throw new Error('Object expected');
		return;
	}else if(Array.isArray(tree)){
		throw new Error('Arrays are not valid objects');
	}
	this.zipFile = new admzip();
	this.zipFile = Statics.iterateSchema(tree, this.zipFile, "");
	this.toBuffer = function(){
		return this.zipFile.toBuffer();
	}
}

module.exports = ziptree;