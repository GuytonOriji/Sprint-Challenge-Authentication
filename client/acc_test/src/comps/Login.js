import React, { Component } from 'react';
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import { createBrowserHistory } from 'history';
import { withRouter } from 'react-router';
import {connect} from 'react-redux'
import {fetchOrNah,fetchHeaderMsg} from './redux/actions'






class Login extends Component {
  constructor(props){
    super(props)
    this.state={
       username:'',
        password:''
    } 

    this.handleLogin = this.handleLogin.bind(this)
  }


  componentDidMount(){
    console.log(this.props)
 
  }


  componentDidUpdate(){
  }


  handleLogin(e){
    e.preventDefault()
    axios.post(`${this.props.api}${this.props.ext}`,this.state)
    .then(res=>{
      console.log(res)
        localStorage.setItem('token',res.data.token)
        localStorage.setItem('msg',res.data.msg)
        this.props.fetchHeaderMsg()
    })
    .catch(err=>{
        console.log(err)
    })
    .finally(done=>{
       this.props.fetchOrNah()
       this.props.history.push('/jokes')

    })
    //e.reset()
  }


  render() {
    return (
     <div>
      <NavLink to='/'><button>Home</button></NavLink>
            <form onSubmit={this.handleLogin}>
            <label>username:
            <input type='text' 
            value={this.state.username}
            onChange={(e)=>this.setState({username:e.target.value})}
             />
            </label>
            <label>password:
            <input type='text' 
            value={this.state.password}
            onChange={(e)=>this.setState({password:e.target.value})}
             />
            </label>
            <div>
            <button>login</button>
            </div>
            </form>

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
  )(withRouter(Login));
