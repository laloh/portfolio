import React from "react"
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LogoDevIcon from '@mui/icons-material/LogoDev';

const Body = props => {
	return (
		<div className='body-content'>
				<h4>Hello!</h4>
				<p id='body-content-resume'>
					You can call me lalo, i'm a full stack developer
					based in Mexico with passion for building digital
					service/stuff i find interesting and necessary. I
					love all things for launching products, from planning
					and designing all the way to solving real-life problems
					with code. When not online, i am usually with friends,
					family, and my little Husky.
				</p>
				<h4>Bio</h4>
					<p>1994 &nbsp; Born in Tabasco, Mexico (Southeast)</p>
					<p>2016 &nbsp; Academic Exchange in Spain</p>
					<p>2018 &nbsp; Graduated from Computer Science Major</p>
					<p>2020 &nbsp; Worked at Rappi (Remote Unicorn)</p>
					<p>2021 &nbsp; Launched Business Side-Project</p>
				<h4>I ♥</h4>
				<p>Music, Gaming, and Travelling</p>
				<h4>On the web</h4>
				<div className="body-content-web">
					<p><GitHubIcon /><a href="https://github.com/laloh">@laloh</a></p>
					<p><TwitterIcon /><a href="https://twitter.com/EduardocarreraH">@EduardocarreraH</a></p>
					<p><LinkedInIcon /><a href="https://www.linkedin.com/in/educarrerah/">@educarrerah</a></p>
					<p><LogoDevIcon /><a href="https://dev.to/eduardocarrerah">@eduardocarrerah</a></p>
				</div>

		</div>
	)
}

export default Body