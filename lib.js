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

    try {
        elt = document.getElementById('result');    
        elt.innerText = result;
        elt.focus();
	    elt.select();
		Copied = window.getSelection(); //.createTextRange();
		document.execCommand("Copy");
    } catch (ReferenceError) {
    }
    return result;
}
