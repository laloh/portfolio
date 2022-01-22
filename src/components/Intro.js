import React from 'react'

const Intro = props => {
	return (
		<div className='intro'>
			<p>Hello 👋, I'm a full-stack developer based in Mexico!</p>
			<div className='intro-img'> 
				<div>
					<h2>Eduardo Carrera</h2>
					<h4>Technology Enthusiast (Developer / Gaming / Data)</h4>
				</div>
				<img id='avatar' src={require('./profile.jpg')} alt='Developer' />
			</div> 
		</div>
	)
}

export default Intro
