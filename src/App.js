import './App.css';
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Dashboard from './Dashboard';
import Home from './Home';
import Contact from './Contact';
import NoPage from './NoPage';
/*import Menu from './Menu';
*/
function App() {
  return (
		  <>

      <Routes>
/*          	  	  <Route path="/" element={<Home title="Welcome to Home Page"/>}/>		  
				  <Route path="/Dashboard" element={<Dashboard title="Welcome to Dashboard" />} />
				  <Route path="/Contact" element={<Contact title="Contact Us" />} />
*/				  
				  
				  <Route path="/" element={<Home title="Welcome to Home Page"/>}>		  
					  <Route path="Dashboard" element={<Dashboard title="Welcome to Dashboard" />} />
					  <Route path="Contact" element={<Contact title="Contact Us" />} />
			      </Route>
			  
		 	  
      </Routes>

 		 
			
            



		 </>

);
}

export default App;
