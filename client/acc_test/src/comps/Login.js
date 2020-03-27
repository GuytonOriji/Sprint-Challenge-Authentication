import React, { Component } from 'react';
import axios from 'axios'
import {NavLink} from 'react-router-dom'





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
    })
    .catch(err=>{
        console.log(err)
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

export default Login;
