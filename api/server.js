// build your server here and require it from index.js
const express = require("express");

const server = express();

server.use(express.json());

// server.use("/api/cars",  ;

server.use((err, req, res, next) => {
	//eslint-disable-line
	res.status(err.status || 500).json({
		message: err.message,
		stack: err.stack,
	});
});

module.exports = server;