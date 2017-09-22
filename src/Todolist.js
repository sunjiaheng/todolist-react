import React, { Component } from 'react';

import {connect} from 'react-redux';


class Todolist extends Component {
	constructor(props) {
        super(props);

        
    }
    do(index){
        this.props.doover(index)
        console.log(index)
    }

    render() {
        return (
            <div>
                todolist
                <ul>
                    {
                        this.props.listdo.map((item,index)=>{
                            return<li key={index}>
                                    {item}
                                    <button onClick = {this.do.bind(this,{index})}>做完了</button>
                                </li>

                        })  
                        
                    }
                </ul>  
                
            </div>
        );
    }
}

export default connect(
    (state)=>{
        return{
            listdo:state.todo
        }
    }
    ,
    {
        doover:(index)=>{
            return{
                type:"over",
                info:index
            }
        }
    }
  )(Todolist);