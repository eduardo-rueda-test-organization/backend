const http = require('http');

const server = http.createServer((req, res) => {
	const url = req.url;
	console.log(url)
	switch (url) {
		case "/home":
			res.end("Welcome!");
			break;
		case "/user":
			res.end("You are a person!");
			break;
		default:
			res.end("Hello World!");

	}
})

const PORT = process.env.PORT || 3000;

server.listen(PORT);