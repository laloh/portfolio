import React from 'react'

const Intro = props => {
	return (
		<div className='intro'>
			<div className='image'>
			</div>
			<p>Hello, I'm a full-stack developer based in Mexico!</p>
|			<div className='profile'>
				<h2>Eduardo Carrera</h2>
				<h4>Technology Enthusiast (Developer / Gaming / Data)</h4>
				<img src={require('./profile.jpg')} alt='Developer' />
			</div>
		</div>
	)
}

export default Intro
