import * as React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import SourceRoundedIcon from '@mui/icons-material/SourceRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';


export default function ButtonAppBar() {
  return (
	  <div className='header'>
		  <div className='header-profile'>
				<div className='header-profile-name'>
					<CodeIcon/>
					<span>Eduardo Carrera</span>
				</div>
				<div className='header-profile-works'>
					<WorkRoundedIcon/> 
					<span>Works</span>
				</div>
				<div className='header-profile-posts'>
					<SourceRoundedIcon/> 
					<span>Posts</span>  
				</div>
				<div className='header-profile-source'>
					<GitHubIcon/> 
					<span>Source</span>
				</div>		
		  </div>
	  </div>
  );
}