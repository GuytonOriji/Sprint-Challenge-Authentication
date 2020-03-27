import React, { Component } from 'react';
import {axiosWithAuth} from './auth/'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchOrNah,fetchHeaderMsg} from './redux/actions'


class Jokes extends Component {
  constructor(props){
    super(props)
    this.state={
      btnmsg:'Click above to get jokes'
    }

    this.logout = this.logout.bind(this)

  }


  componentDidMount(){
   
  console.log('efefef',this.props)
  this.props.fetchOrNah()
  }


  componentDidUpdate(){
  

  }

 componentWillUnmount(){
      
  
  }

logout(){
  localStorage.clear()
   this.props.fetchHeaderMsg()

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
              this.props.jokes &&
              this.props.jokes.map(joke=>{
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




const mapStateToProps = state =>{
  return {
    jokes:state.jokes
  }
}

export default  connect(
  mapStateToProps,
  {fetchOrNah,fetchHeaderMsg}
  )(Jokes);
