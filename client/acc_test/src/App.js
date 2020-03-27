import React, { Component } from 'react';
import './App.css';
import {NavLink,Route, Switch } from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import Login from './comps/Login.js'
import Register from './comps/Register.js'
import Jokes from './comps/Jokes.js'
import {PrivateRouter} from './comps/privateRouter/'
import reducer from './comps/redux/reducers'
import {Button} from 'reactstrap'
import Header from './header'


const store = createStore(reducer,applyMiddleware(thunk))

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      api:'http://localhost:3300/api',
      users:'/auth/users',
      register:'/auth/register',
      login:'/auth/login',
      jokes:'/jokes',

    }
  }


  componentDidMount(){

   
  }


  componentDidUpdate(){

  }



  render() {
    return (
      <Provider store={store}>
      <div className="App">
       <Header />
        <main>

          

        <Switch>
        <Route exact path='/' render={()=>{

           return (
            <div>
           <Button color='success'><NavLink to='/login'>login</NavLink></Button>{'   '}
           <Button color='danger'><NavLink to='/register'>register</NavLink></Button>{'   '}
           <Button color='info'><NavLink to='/jokes'>jokes</NavLink></Button>{'   '}

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
      </Provider>
          );
  }
}

export default App;
