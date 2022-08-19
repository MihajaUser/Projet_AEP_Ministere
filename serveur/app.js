const express = require('express');
const cors = require('cors');
const db = require('./config');
//const autreApp = require('/autreApp');
const app = express();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization',
	);
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, PATCH, OPTIONS',
	);
	next();
});

app.get('/give', async (req, res) => {
	const v = 'lalatiana mihaja randrianarisoa';
	res.status(200).json(v);
});

app.get('/reactgive', async (req, res, next) => {
	console.log("voici react zao ")
	next();
});

app.get('/api/stuff', (req, res, next) => {});

module.exports = app;
