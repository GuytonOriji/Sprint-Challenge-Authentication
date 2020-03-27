const DB = require('./dbConfig.js')

	

	module.exports = {
		regUser,
		logUser,
		getUsers
	}



	async function getUsers(id){
		if(id){
			return DB('users')
		.where({id})
		.first()
		}else{
			return DB('users')
		}
		
	}

	async function logUser(username){
		return DB('users')
		.where({username})
		.first()
	}


	async function regUser(user){
		return	DB('users')
		.insert(user)
		.then(id=>{
		return	getUsers(id[0])
		})
	}