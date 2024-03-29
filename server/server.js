const express = require('./config/express.js')
const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';

// Use env port or default
// const port = process.env.PORT || 5000;

// const app = express.init()
// app.listen(port, () => console.log(`Server now running on port ${port}!`));

//Specification for http server

var http = require('http'), 
 	url = require('url');

// Global variables 
var listingData;

// Load client secrets from a local file.
fs.readFile('./server/credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Calendar API.
  authorize(JSON.parse(content), listEvents);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.web;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getAccessToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getAccessToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

/**
 * Lists the next 10 events on the user's primary calendar.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function listEvents(auth) {
  const calendar = google.calendar({version: 'v3', auth});
  calendar.events.list({
    calendarId: 'primary',
    timeMin: (new Date()).toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: 'startTime',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);

	// res.setHeader('Content-Type', 'application/json');

	const events = res.data.items;

    if (events.length) {
      console.log('Upcoming 10 events:');
      events.map((event, i) => {
        const start = event.start.dateTime || event.start.date;
		console.log(`${start} - ${event.summary}`);
      });
    } else {
      console.log('No upcoming events found.');
    }
  });
}

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
const server = http.createServer(requestHandler);
//const app = express.init(requestHandler);
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
  	server.listen(port, function() {
        console.log(`Server now running on port ${port}!`);
		//console.log('Server lisrening on: http://127.0.0.1:' + port);   
	});
   
});
