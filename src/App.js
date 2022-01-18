import './App.css'
import React from 'react';
import ButtonAppBar from './components/Header';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Body from './components/Body';

function App() {
  return (
	<div>
		<ButtonAppBar />
		<div className='container'> 
			<Intro />
			<Body />
			<Footer />
		</div>
	</div>
  );
}

export default App;
