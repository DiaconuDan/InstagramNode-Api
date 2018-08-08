Ziptree
=======

Node.js module for creating .zip files from a object tree

## Install ##
Via NPM

    npm install ziptree
    
## Usage ##

    var foto = fs.readFileSync(process.cwd() + '/foto.jpg');

    var Ziptree = require('ziptree');
    
    var file = new ziptree({
    	'testfile1.txt': 'This is a String',
    	'testfile2.txt': 123456,
    	'photo.jpg': foto,
    	'folder': {
    		'samephoto.jpg': foto,
    		'im_gonna_get_you_too.txt': 'Another one bites the dust...',
    		'folder-ception': {
    			'photoagain.jpg': foto
    		}
    	}
    });
    
    var data = file.toBuffer();
    
Then 'data' will have the zip file's buffer with the next file tree

    files.zip
    |- testfile1.txt    // This is a String
    |- testFile2.txt    // 123456
    |- photo.jpg        // < The photo >
    |- folder           // < A folder >
      |- samephoto.jpg               // < The photo >
      |- im_gonna_get_you_too.txt    // Another one bites the dust...
      |- folder-ception              // < A folder >
        |- photoagain.jpg              // < The photo >
    
## License ##

MIT
