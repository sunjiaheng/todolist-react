import React, { Component } from 'react';

import {connect} from 'react-redux';



class Donelist extends Component {
	constructor(props) {
	    super(props);
	    
	}
	remove(index){
        this.props.doremove(index)
        console.log(index)
    }

    render() {
	    return (
	    	
	      	<div>
	       		Donelist
	       		{console.log(this.props.listdone)}
	       		<ul>

	       			{
                        this.props.listdone.map((item,index)=>{
                            return<li key={index}>
                                    {item}
                                    <button onClick = {this.remove.bind(this,{index})}>删除</button>
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
            listdone:state.done
        }
    }
    ,
    {
        doremove:(index)=>{
            return{
                type:"remove",
                info:index
            }
        }
    }
  )(Donelist);