# csv-export
Create csv from JSON and quickly convert it to downloadable zip file. Works with nested JSON files.

## Install Package
npm install --save csv-export


```javascript

var csv_export=require('csv-export');

var documents = 
{
	food:[
		    {
		        Make: 'Nissan',
		        Model: 'Murano',
		        Year: '2013',
		        Specifications: {
		            Mileage: '7106',
		            Trim: 'S AWD',
		            size:{
		            	width:3988,
		            	height:4094
		            }
		        }
		    },
		    {
		        Make: 'BMW',
		        Model: 'X5',
		        Year: '2014',
		        Specifications: {
		            Mileage: '3287',
		            Trim: 'M',
		            size:{
		            	width:6777,
		            	height:23,
		            	depth:098
		            }
		        }
		    }
		],
	bash:[
	    {
	        Make: 'Nissan',
	        Model: 'Murano',
	        Year: '2013',
	        Specifications: {
	            Mileage: '7106',
	            Trim: 'S AWD',
	            size:{
	            	width:3988,
	            	height:4094
	            }
	        }
	    },
	    {
	        Make: 'BMW',
	        Model: 'X5',
	        Year: '2014',
	        Specifications: {
	            Mileage: '3287',
	            Trim: 'M',
	            size:{
	            	width:6777,
	            	height:23,
	            	depth:098
	            }
	        }
	    }
	]
}
;



//export data
var fs = require('fs');

csv_export.export(documents,function(buffer){

  //this module returns a buffer for the csv files already compressed into a single zip.
  //save the zip or force file download via express or other server
  fs.writeFileSync('./data.zip',buffer);

});

```
