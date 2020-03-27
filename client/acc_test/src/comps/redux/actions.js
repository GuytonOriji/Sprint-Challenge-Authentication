import {axiosWithAuth} from '../auth/'
export const FETCHING = 'FETCHING'
export const HEADERMSG = 'HEADERMSG'
export const FETCHED = 'FETCHED'
export const ERR = 'ERR'	







export const fetchOrNah = () => dispatch =>{
		dispatch({type:FETCHING})


		axiosWithAuth().get("/api/jokes").then(jokes=>{
				console.log('jokkeeee',jokes)
				setTimeout(()=>{dispatch({type:FETCHED, payload:jokes.data})},700)
		}).catch(err=>{
			
			dispatch({type:ERR,payload:"cannot get jokes now"})
		})
		
}



export const fetchHeaderMsg = () => dispatch =>{
		dispatch({type:FETCHING})

		if(localStorage.getItem('token')){
				dispatch({type:HEADERMSG, payload:localStorage.getItem('msg')})

		}else{
			dispatch({type:ERR,payload:"cannot get jokes now"})

		}
	
			
		
}