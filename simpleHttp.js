// Little sample of risk to use NodeJS by
// forcing a blocking code
// Use with :
// First Browse http://localhost:8080/?time=10
// Another tab browse http://localhost:8080/?time=1
// Second browse will start it's 1 second delay after the 10 of the first call.
// Blocking call !

//Lets require/import the HTTP module
var http = require('http');
var qs = require('querystring');

//Lets define a port we want to listen to
const PORT=8080;

//We need a function which handles requests and send response
function handleRequest(request, response){
  var str = request.url.split('?')[1];
  var query = qs.parse(str);
  var time = 1000;

  // Here we block. Think to heavy code instead... :(
  if (query.time > 0) {
    time = query.time * 1000;
  }
  var stop = new Date().getTime();
  while(new Date().getTime() < stop + time) { }

  response.end('With a time parameter (Query String) : ' + time / 1000 + ' seconds delay.');
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
  //Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", PORT);
});
