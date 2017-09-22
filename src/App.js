import React,{Component} from "react";
import PropTypes from 'prop-types';

import Nav from "./Nav";
import Add from "./Addlist";


import "./index.scss";



class App extends Component{
  constructor(props){
    super(props); 
  }
  render(){
    
    return <div className="main">
      
        {this.props.children}

        <Add></Add>
      
      <Nav></Nav>
    </div>
  }
}


export default App;