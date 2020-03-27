import React, { Component } from 'react';
import {axiosWithAuth} from './auth/'
import {NavLink} from 'react-router-dom'


class Jokes extends Component {
  constructor(props){
    super(props)
    this.state={
      jokes:''
    }

    this.logout = this.logout.bind(this)

  }


  componentDidMount(){
      axiosWithAuth().get(`http://localhost:3300/api/jokes`)
      .then(res=>{
        console.log(res)
        this.setState({
          jokes:res.data
        })
      })
  
  }


  componentDidUpdate(){

  }



logout(){

}


  render() {
    return (
     
            <div> 
            <h1>JOKES</h1>
            <NavLink to='/'><button>Home</button></NavLink>
            <NavLink to='/'><button onClick={this.logout}>Logout</button></NavLink>
            <div>
      
            {
              this.state.jokes && 
              this.state.jokes.map(joke=>{
                return (

                  <div key={joke.id}>
                  {joke.joke}
                  </div>


                  )
              })
            }
            </div>
             </div>

    );
  }
}

export default Jokes;
