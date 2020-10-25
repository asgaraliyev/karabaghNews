import React from 'react';
import { Route, Redirect } from 'react-router';

export default (
	<Route>
		<Route path='/' />
		<Route path='/catagory'>
			<Route path=':catagoryName'>
			
			</Route>
		</Route>
		<Route path='/news'>
			<Route path=':newsName'>
			
			</Route>
		</Route>
		<Redirect from='/home' to='/' />
	</Route>
);