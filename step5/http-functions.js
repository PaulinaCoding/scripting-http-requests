
module.exports = function getHTML (options, callback) {

  /* Your code here */
  function getHTML (options, callback) {
    
    // notice that https.get takes a callback with one parameter -
    // response, which is a Stream that represents the HTTP response
    https.get(options, function (response) {
  
      // set encoding of received data to UTF-8
      response.setEncoding('utf8');
  
      var buf = '';
      response.on('data',function(chunk){
        //buf += chunk;
        callback(chunk)
      });
  
      // the callback is invoked when all of the data has been received
      // (the `end` of the stream)
      response.on('end', function() {
        console.log('Response stream complete');
        console.log(buf);
      });
  
    });
  
  }
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
  function printHTML(html){
    console.log(content);
  }
var getHTML = require('./http-functions');
  //getHTML(requestOptions, printHTML);
};