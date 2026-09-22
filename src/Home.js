import {Outlet} from "react-router-dom";
import {useState} from "react";
import RatesList from './RatesList';
 
function Home(props)
{
	 
	return (
			<>
			<p>Outlet</p>
			<h2>{props.title}</h2>
			 <RatesList title="Rates Listing"/>
								
										 
			 
			<Outlet />
			</>
			);
	
}

export default Home;