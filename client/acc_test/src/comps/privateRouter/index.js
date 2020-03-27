
import React from 'react'
import {Route, Redirect} from 'react-router-dom'





export const PrivateRouter = ({component:Component,...rest}) =>{

			const token = window.localStorage.getItem('token')

				return (

					<Route{...rest} render={props=>{
						if(token){
							//render this
							return <Component {...props} />
						}else{
						return	<Redirect  to='/' />
						}
					}} />

					)

}