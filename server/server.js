const express = require('./config/express.js')
 
// Use env port or default
// const port = process.env.PORT || 5000;

// const app = express.init()
// app.listen(port, () => console.log(`Server now running on port ${port}!`));

//Specification for http server

var http = require('http'), 
	fs = require('fs'), 
 	url = require('url');

// Global variables 
var listingData;

var requestHandler = function(request, response) {
  	var parsedUrl = url.parse(request.url);

  	/*
    	This request handler should send listingData in the JSON format if a GET request 
    	is sent to the '/listings' path. Otherwise, it should send a 404 error.
    
   */
   
   if (parsedUrl.pathname == '/listings') {
  		response.write(listingData);
  		response.end();
  	} 
  	
  	else {
  		response.writeHead(404, {"Content-Type": "text/plain"});
  		response.write('404, Page Not Found');
  		response.end();
  	}
};

// Server initialization
//var server = http.createServer(requestHandler);=====>from original server.js file

const port = process.env.PORT || 5000;
const app = express.init()
//app.listen(port, () => console.log(`Server now running on port ${port}!`));


fs.readFile('listings.json', 'utf8', function(err, data) {
  	/*
   	This callback function should save the data in the listingData variable, 
    	then start the server. 
   */
   // error and data handling
  	if(err) throw err;
  
  	listingData = data;

	// Start the server
  	app.listen(port, function() {
        console.log(`Server now running on port ${port}!`);
		//console.log('Server lisrening on: http://127.0.0.1:' + port);   
	});
   
});
