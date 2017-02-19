#!/usr/bin/env node

var fs = require('fs');
var vm = require('vm')

String.prototype.constructor = false;

var sha1 = require('./sha1.min');

b85 = fs.readFileSync('lib.js','utf8');
eval(b85);

if (process.argv.length > 2) {
    var string = process.argv[2];
    var res = doit(string);
    console.log(res);
}
