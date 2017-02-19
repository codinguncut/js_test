#!/usr/bin/env node

var fs = require('fs');

sha1 = fs.readFileSync('sha1.min.js','utf8');
eval(sha1);

b85 = fs.readFileSync('lib.js','utf8');
eval(b85);

if (process.argv.length > 1) {
    var string = process.argv[2];
    var res = doit(string);
    console.log(res);
}
