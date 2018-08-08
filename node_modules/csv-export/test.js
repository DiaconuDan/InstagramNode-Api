
var csv_export=require('./index.js');

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




csv_export.export(documents,function(obj){

	console.log(obj)

})
