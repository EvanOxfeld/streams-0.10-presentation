'use strict';

module.exports = Match;

var Transform = require('stream').Transform;
var inherits = require("util").inherits;
var Buffers = require('buffers');

inherits(Match, Transform);

function Match(opts, matchFn) {

	...

  Transform.call(this);
}

Match.prototype._transform = function (chunk, encoding, callback) {
  var pattern = this._opts.pattern;
  this._bufs.push(chunk);

  var index = this._bufs.indexOf(pattern);
  if (index >= 0) {
    processMatches.call(this, index, pattern, callback);
  } else {
    this._matchFn(this._bufs.splice(0, this._bufs.length - chunk.length));
    callback();
  }
};

//call matchFn for every match within a given chunk
function processMatches(index, pattern, callback) {
  
	...

}
