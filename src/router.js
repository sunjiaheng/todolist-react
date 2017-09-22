//路由模块
import {
  HashRouter as Router, //起一个别名
  Route,
  Redirect,
  Link,
  Switch
} from 'react-router-dom' // 包含 这两个HashRouter 和BrowserRouter
import React from "react"; //引入react 解析jsx语法

import { Provider} from 'react-redux'

import App from "./App"; 
import Donelist from "./Donelist"; 
import Listdo from "./Listdo"; 
import Todolist from "./Todolist"; 

import store from "./Redux/Store";




const router = (
		<Provider store = {store}>
			<Router>
				<App>
					<Switch>
						<Route path="/listdo" component={Listdo}/>
						<Route path="/todolist" component={Todolist}/>
						<Route path="/donelist" component={Donelist}/>
						<Redirect from ="/" to="/listdo"/>
					</Switch>
				</App>
			</Router>
		</Provider>
	
) 

export default router;