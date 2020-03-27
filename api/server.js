const express = require('express');
const session = require('express-session');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const jokesRouter = require('../jokes/jokes-router.js');

const server = express();


server.use(session({
	secret:'$3CR3TK3Y',
	cookie:{
		maxAge:1000 * 60 * 60,
		secure:false,
		httpOnly:true
	},
	resave:false,
	saveUninitialized:true

}))
server.use(logger);
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/jokes', authenticate, jokesRouter);





function logger(req, res, next) {
    console.log(`${req.method} to ${req.originalUrl} at ${new Date().toISOString()}`);

    next();
}
module.exports = server;
