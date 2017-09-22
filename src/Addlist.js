import React,{Component} from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

class Add extends Component{
	constructor(props){
	    super(props); 
	}

	render(){
		
		return <div className = "nav">
			<input type='text' ref = "input"/>
			<NavLink to="/listdo">	<button onClick = {this.addclick.bind(this)}>添加</button></NavLink>
		
			
		</div>
	}

	addclick(){
		this.props.changelist(this.refs.input.value);
		this.refs.input.value = ""
	}
}

export default connect(
		null,//接收组件
		{
			changelist:(item)=>{
				return{
					type:"addlist",
					info:item
				}
			}
		}
	)(Add);
