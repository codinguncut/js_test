#!/usr/bin/env node

var fs = require('fs');

b85 = fs.readFileSync('lib.js','utf8');
eval(b85);

md5 = fs.readFileSync('md5-min.js','utf8');
eval(md5);

if (process.argv.length > 1) {
    var string = process.argv[2];
    var res = encode_ascii85(hex_md5(string)).slice(0, 16);
    console.log(res);
}
