var getHTML = require('./http-functions');
var https = require('https');


var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
};

getHTML(requestOptions, printHTML);

function printHTML(html) {
  console.log(html)
}