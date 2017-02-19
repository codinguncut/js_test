function z85(words) {
    var res = [];
    var abc = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-:+=^!/*?&<>()[]{}@%$#';
    for (var i in words) {
        var x = []
        for (var j = 0; j < 5; j++) {
            x.push(abc[Math.abs(words[i] % 85)]);
            words[i] = (words[i] / 85)>>0;
        }
        res.push(x.reverse().join(''));
    }
    return res.join('');
}


function bytes_to_words(bytes) {
    var res = [];
    for (var i = 0; i < 4; i++) {
        var x = 0;
        for (var j = 0; j < 4; j++) {
            x += bytes[i*4+j]<<((3-j)*8);
        }
        res.push(x);
    }
    return res;
}


function doit(string) {
    var dig = sha1.digest(string);
    var res = bytes_to_words(dig);
    var pw = z85(res);
    var result = '0,aA'+pw.slice(0, 12);

    if (document) {
        elt = document.getElementById('result');    
        elt.innerText = result;
        elt.focus();
	    elt.select();
		Copied = window.getSelection(); //.createTextRange();
		document.execCommand("Copy");
    }
    return result;
}

/*
function encode_ascii85(a) {
  var b, c, d, e, f, g, h, i, j, k;
  for (!/[^\x00-\xFF]/.test(a), b = "\x00\x00\x00\x00".slice(a.length % 4 || 4), a += b, 
  c = [], d = 0, e = a.length; e > d; d += 4) f = (a.charCodeAt(d) << 24) + (a.charCodeAt(d + 1) << 16) + (a.charCodeAt(d + 2) << 8) + a.charCodeAt(d + 3), 
  0 !== f ? (k = f % 85, f = (f - k) / 85, j = f % 85, f = (f - j) / 85, i = f % 85, 
  f = (f - i) / 85, h = f % 85, f = (f - h) / 85, g = f % 85, c.push(g + 33, h + 33, i + 33, j + 33, k + 33)) :c.push(122);
  return function(a, b) {
    for (var c = b; c > 0; c--) a.pop();
  }(c, b.length), String.fromCharCode.apply(String, c);
}
*/
