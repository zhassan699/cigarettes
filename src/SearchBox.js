import React from 'react';


const SearchBox = ({ SearchField, Search }) => {


return( 
		<div className='tc'>
		<input
		className='pa2 input-reset ba bg-white hover-bg-black hover-white w-20' 
		type='search' 
		placeholder='search for smoke'
		onChange={Search} 
		/>
		</div>

	);
}

export default SearchBox;

















