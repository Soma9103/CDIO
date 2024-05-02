const http = require('http');
const express = require('express'); // Import express module correctly
const { connect } = require("./database");
const route = require("./src/router");

// Create an express application
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(bodyParser());
app.use(bodyParser.json());
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }));
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }));
// parse an text body into a string
app.use(bodyParser.text({ type: 'text/plain' }));
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));
// Connect to the database
connect();

// Set up the port
const port = 3000;
app.set('port', port);
app.get('/', (req, res) => {
    res.send('Chào mừng đến với máy chủ'); // I've adjusted the Vietnamese text here
});

// Apply your routes
route(app);

// Create the server
const server = http.createServer(app);

// Start listening on the specified port
server.listen(port, () => {
    console.log('Server is running on port ' + port);
});
