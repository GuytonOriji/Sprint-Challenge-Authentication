/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {

	const authHeader = req.headers['authorization']
	/*variable = the servers request headers from handshake 
	*/

	const token = authHeader && authHeader.split(' ')[1]
	console.log(`${process}`)
	console.log(`${process.env}`)
	console.log(`${process.env.token}`)
	console.log(`${jwt.decode(process.env.token)}`)

	if(token!==process.env.token){
	 	  res.status(401).json({ you: 'shall not pass!' });

}else{
	 next()
		}


};


// const authHeader = req.headers['authorization']
// 	variable = the servers request headers from handshake 
	
	

	