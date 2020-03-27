import {FETCHED,FETCHING,HEADERMSG,ERR} from './actions'


const initialState={
	jokes:"",
	headerMsg:'Please Register or Login'
}



const reducer = (state = initialState, action) =>{

			switch(action.type){
				case FETCHING:
					return {
						...state,
						needsToFetch:true,
					}

				case FETCHED:
				return {
					...state,
					jokes:action.payload,
					needsToFetch:false,
				}

				case ERR:
				return {
					...state,
					error:action.payload,
					needsToFetch:false,
				}

				case HEADERMSG:
				return {
					...state,
					headerMsg:action.payload,
					needsToFetch:false,
				}

				default:
				return state
			}
}





export default reducer