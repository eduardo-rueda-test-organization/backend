const http = require('http');

const server = http.createServer((req, res) => {

	res.setHeader('Access-Control-Allow-Origin', '*'); // Or specify your frontend's origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Specify allowed methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Specify allowed headers (if any)

	const url = req.url;

	switch (url) {
		case "/home":
			res.end("Welcome!");
			break;
		case "/user":
			res.end("You are a person!");
			break;
		case "/test":
			res.end("The test was successful!");
			break;
		default:
			res.end("Hello World!");
	}
})

const PORT = process.env.PORT || 3000;

server.listen(PORT);