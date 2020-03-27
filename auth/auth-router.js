const router = require('express').Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const DBHook = require('../database/DBHooks.js')

router.post('/register', (req, res) => {
  // implement registration
 const user = req.body
  const HC = process.env.HASHING_ROUNDS || 8

  if(
  	user ||
  	user.username ||
  	user.password
  	){
  	 const hash = bcrypt.hashSync(user.password,HC)
  user.password = hash

  DBHook.regUser(user)
  .then(newUser=>{
  	res.status(201).json({
  	msg:'CREATED ACCOUNT!',
  	newAccount:newUser
  })
  })
  .catch(err=>{
  		res.status(403).json({
  	msg:'cannot add user now'
  })
  		
  
  });

	}else{
		res.status(403).json({
  	msg:'input Error!'
  })
	}	})

router.post('/login', middleware, (req, res) => {
  // implement login
 const user = req.body
  
  		res.status(201).json({
  			msg:`WELCOME ${user.username} YOU ARE NOW LOGGED IN!`,
  			token:req.token
  		})

});


router.get('/users',(req,res)=>{
      DBHook.getUsers()
      .then(users=>{
         res.status(201).json({
    msg:'pulled',
    users:users
  })
      })
      .catch(err=>{
         res.status(201).json({
    msg:'cannot get users',
    error:err
  })
      })
})


async function middleware (req,res,next){

 const user = req.body



  if(
  	user ||
  	user.username ||
  	user.password
  	){






	DBHook.logUser(user.username)
  	.then(user_=>{
  		if(bcrypt.compareSync(user.password,user_.password))
  		{
  						const payload = {
							user:user_.username,
						}

						

						const secret = '$3CR3TK3Y'

						 jwt.sign(payload,secret,(err,token)=>{
						 	if(!err){
						 			req.token = token
                  process.env.token = token
						 			next()
						 	}else{
						 		res.status(500).json({msg:'ran out of tokens...please wait'})
						 	}
						 })
  		}		
  	})
  	.catch(err=>{
  		
  	})






  
  }else{
  	res.status(403).json({
  	msg:'input Error!'
  })
  }
  	
		
}

module.exports = router;
