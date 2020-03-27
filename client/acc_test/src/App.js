import React, { Component } from 'react';
import './App.css';
import {NavLink,Route, Switch } from 'react-router-dom'

import Login from './comps/Login.js'
import Register from './comps/Register.js'
import Jokes from './comps/Jokes.js'
import {PrivateRouter} from './comps/privateRouter/'



class App extends Component {
  constructor(props){
    super(props)
    this.state={
      api:'http://localhost:3300/api',
      users:'/auth/users',
      register:'/auth/register',
      login:'/auth/login',
      jokes:'/jokes',

      headerMsg:'Please Register or Login'
    }
  }


  componentDidMount(){

    if(localStorage.getItem('token')){
        this.setState({
          headerMsg:` ${localStorage.getItem('msg')}`
        })
    }else{
        
    }
  }


  componentDidUpdate(){

  }



  render() {
    return (
      <div className="App">
        <header>
        <h2>{this.state.headerMsg}</h2>
        </header>
        <main>

          

        <Switch>
        <Route exact path='/' render={()=>{

           return (
            <div>
           <button><NavLink to='/login'>login</NavLink></button>{'   '}
           <button><NavLink to='/register'>register</NavLink></button>{'   '}
           <button><NavLink to='/jokes'>jokes</NavLink></button>{'   '}

           </div>

            )

        }} />


        <Route exact path='/register' render={()=>{//login
        return (

          
           <Register
           api={this.state.api}
            ext={this.state.register}/>
          )
      }} />

      <Route exact path='/login' render={()=>{//register
        return (

              <Login 
           api={this.state.api}
            ext={this.state.login}/>

          )
      }} />


   <PrivateRouter exact path='/jokes' component={Jokes}/>




        </Switch>
        </main>

        <footer></footer>
      </div>
          );
  }
}

export default App;
