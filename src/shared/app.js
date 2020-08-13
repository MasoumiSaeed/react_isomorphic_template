import React,{Component} from 'react';
import {Route,Redirect} from 'react-router-dom';
import {SSRComponent} from './components/SSR.Component';
import {SharedComponent} from './Components/Shared.Component';
export class App extends Component{
	render(){
		return(
			<div>
				{/* Server-Side redirectrion */}
				<Route exact path='/' render={
					({ staticContext, }) => {
						if (staticContext) {
							staticContext.status = 301;
							staticContext.referrer = "/";
						}
						return (<Redirect to="/ssr" />);
					}
				} />
				<Route exact path='/ssr' component={SSRComponent} /> 
				<Route exact path='/csr' component={SharedComponent} /> 
			</div>
		);
	}
};