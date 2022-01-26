import '../App.css'
import React from 'react';
import ButtonAppBar from './Header';

// TODO: Do a for loop to write the currently works i've made
const Works = props => {
  return (
	<div>
		<ButtonAppBar />
		<div className='title-works'><h1>Works</h1></div>	
		<div className='container-works'>
			<div className='card'>
				<img className='card-img' src={require('../assets/dashboard.png')} alt='Dashboard' />
				<div className='card-title'>
					<h3>Vendery</h3>
				</div>
				<div className='card-description'>
					<p>Hello there mans Hello there mans Hello there mans Hello there mans Hello there mans Hello there </p>
				</div>
			</div>

			<div className='card'>
				<img className='card-img' src={require('../assets/dashboard.png')} alt='Dashboard' />
				<div className='card-title'>
					<h3>Vendery</h3>
				</div>
				<div className='card-description'>
					<p>Hello there mans Hello there mans Hello there mans Hello there mans Hello there mans Hello there </p>
				</div>
			</div>

			
			<div className='card'>
				<img className='card-img' src={require('../assets/dashboard.png')} alt='Dashboard' />
				<div className='card-title'>
					<h3>Vendery</h3>
				</div>
				<div className='card-description'>
					<p>Hello there mans Hello there mans Hello there mans Hello there mans Hello there mans Hello there </p>
				</div>
			</div>
		</div>
	</div>
  )
};

export default Works