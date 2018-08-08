var fs = require('fs');

var ziptree = require('./lib/ziptree.js');

var foto = fs.readFileSync(process.cwd() + '/foto.jpg');

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

fs.writeFileSync(process.cwd() + '/test.zip', data);