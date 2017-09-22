import React,{Component} from "react";
import {NavLink} from "react-router-dom";

class Nav extends Component{
	constructor(prop){
		super(prop);
	}


	render(){
		return <nav className = "nav">
			<ul>
				<li><NavLink to="/listdo" activeClassName="focus">事件列表</NavLink></li>
				<li><NavLink to="/todolist" activeClassName="focus">要做的事</NavLink></li>
				<li><NavLink to="/donelist" activeClassName="focus">已完成的事</NavLink></li>
			</ul>
		</nav>
	}
}

export default Nav;
