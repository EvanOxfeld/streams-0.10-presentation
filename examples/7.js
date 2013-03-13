var MatchStream = require('match-stream');

//Pipe in "Hello World"

var ms = new MatchStream({ pattern: 'World'}, function (buf, matched) {
	if (!matched) {
		return this.push(buf);
	}
	this.push(buf);
	return this.push(null); //signal end of data
});
