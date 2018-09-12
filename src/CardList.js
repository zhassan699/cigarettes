import React from 'react';
import Homepage from './Homepage';


const CardList = ({cigarettes}) => {
 	return(
 	<div className='tc'>
 {	     
		cigarettes.map((user, i) => {

			return (

				<Homepage 
				key={i} 
				id={cigarettes[i].id} 
				cigarette={cigarettes[i].cigarette}
				necotine={cigarettes[i].necotine}
				src={cigarettes[i].src}

 				/>

	    );	

   		})

}	
 		
		</div>


	);

}
 	
export default CardList;