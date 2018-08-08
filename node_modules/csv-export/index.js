var converter = require('json-2-csv');
var Ziptree = require('ziptree');
var path =require('path');
var async = require('async');
var _ = require('lodash');


var csv_export={
	json2csv: function(object,callback){
		//
    	converter.json2csv(object,function(err,csv){
    		if (err) {return callback(err,null);}

    	    callback(null,csv);

    	},{CHECK_SCHEMA_DIFFERENCES:false});

	},
	export: function(jsonObj,callback){
		var csvObject = {};
		
		//always use as array
		if(_.isArray(jsonObj)){
			jsonObj={'all':jsonObj};
		}

		async.forEachOf(jsonObj,function(obj,key,next){

			csv_export.json2csv(obj,function(err, csv){
				if (err) throw err;

				csvObject[key+'.csv']=csv;

				//next index
				next();

			});

		},function(){
			// console.log(JSON.stringify(csvObject,0,4))
			//now export
			zipFile(csvObject, function(data){
				callback(data);
			});
			//
		});
	}

};



function zipFile(csvObject, callback){
	//makefile
	var file = new Ziptree (csvObject);
	var data = file.toBuffer();

	callback(data);
}



module.exports = csv_export;
