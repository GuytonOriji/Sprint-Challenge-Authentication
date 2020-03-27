import React, { Component } from 'react';
import {axiosWithAuth} from './auth/'
import {NavLink} from 'react-router-dom'


class Jokes extends Component {
  constructor(props){
    super(props)
    this.state={
      jokes:'',
      btnmsg:'Click above to get jokes'
    }

    this.logout = this.logout.bind(this)

  }


  componentDidMount(){
    axiosWithAuth().get(`http://localhost:3300/api/jokes`)
      .then(res=>{
        this.setState({
          jokes:res.data
        })
      })
  
  }


  componentDidUpdate(){
 
  }

 componentWillUnmount(){
      
  
  }

logout(){
  localStorage.clear()
}




  render() {

    return (
     
            <div> 
            <h1>JOKES</h1>
            <div>

            <NavLink to='/'><button>Home</button></NavLink>
            <NavLink to='/'><button onClick={this.logout}>Logout</button></NavLink>
            </div>
            <div>
            </div>
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
