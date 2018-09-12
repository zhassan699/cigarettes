	import React, { Component } from 'react';
	import CardList from './CardList';
	import { cigarettes } from './cigarettes.js';
	import SearchBox from './SearchBox.js';
    import Scroll from './Scroll.js'

	class App extends Component {
	 constructor() {
	   
	   		super() 
	   		this.state = {
	    		cigarettes: cigarettes,
	     		SearchField: ''
	            } 
					}

	 onSearch = (event) => {
	   this.setState({ SearchField: event.target.value })
	   	
	 }

	 render() {
		const filteredcigarettes = this.state.cigarettes.filter(smoke  =>{
	    return smoke.cigarette.toLowerCase().includes(this.state.SearchField.toLowerCase());

	   })
	
	return (
	    <div className='tc'>  
	    
	    <h1 className='f2'>Happy Smoking</h1>
		<SearchBox Search={this.onSearch}	/>
		<CardList cigarettes={filteredcigarettes}/>		
		</div>
		
	);

	}

	}
	 
	 export default App;