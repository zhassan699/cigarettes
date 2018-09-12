import React from 'react';




const Homepage = ({ id, cigarette, src, necotine}) => {

return (

<div className='tc black bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 link b blue pv2 db bg-animate hover-bg-purple '>
	<img alt='cigarettes' src={src} />
	<div>
		<h2>{cigarette}</h2>
		<p>{necotine}</p>
	</div>
	  <a className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-light-purple" href="#0">Smoke</a>

</div>


	);
}

export default Homepage;