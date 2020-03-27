import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchHeaderMsg} from './comps/redux/actions'


class App extends Component {
  constructor(props){
    super(props)
    this.state={
    
  }

}
  componentDidMount(){

   console.log('header props', this.props)
   this.props.fetchHeaderMsg()
  }


  componentDidUpdate(){

  }



  render() {
    return (
        <header>
        <h2>{this.props.headerMsg}</h2>
        </header>
          );
  }
  }


const mapStateToProps = state =>{
  return {
    headerMsg:state.headerMsg
  }
}
export default connect(
  mapStateToProps,
  {fetchHeaderMsg}
  )(App);
