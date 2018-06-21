import React, {  Fragment } from 'react';
import Header from './Header';
import Main from './Main';
import '../assets/sass/App.scss';
import 'normalize.css'

const App = () => (
	<Fragment>
		<Header />
		<Main />
	</Fragment>
);

export default App;
