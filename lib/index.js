var fs = require('fs');
var path = require('path');
var Buffer = require('buffer').Buffer;
var Error = require('gulp-util').PluginError;
var evStream = require('event-stream');

module.exports = function(opts) {

  opts = opts||{
    stampKeyName: 'r'
  };

  var regExp = /(?:href=|src=)[\'|\"]([^\s>"']+?)[\'|\"]/gi;

  return evStream.map(function(file, cb) {
    if(!file || !file.contents) {
      cb(new Error('gulp-anti-cache', 'It seems that file or it`s content is lost.'), null);
    }

    var contents = file.contents.toString();
    var newContents = contents.replace(regExp, function(word, match) {
      var schar = '?';
      if(match.slice(-1) == '?'){
        schar = '';
      }else if(match.indexOf('?') != -1){
        schar = '&';
      }
      return word.replace(match, match + schar + opts.stampKeyName + '=' + Date.now());
    });

    file.contents = new Buffer(newContents);

    cb(null, file);

  });

};