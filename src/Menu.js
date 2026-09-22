import { Link , Outlet} from "react-router-dom";

const Menu = () => {
  return (
    <>
	<ul className="nav" id="side-menu">
                         <li>
                            <Link to="/"><i className="fa fa-home fa-fw"></i>Home</Link>
                         </li>
                        <li>
                           <Link to="/Dashboard"><i className="fa fa-dashboard fa-fw"></i>Dashboard</Link>

                        </li>
                        <li>
                           <Link to="/Contact"><i className="fa fa-mobile fa-fw"></i>Contact</Link>
                        </li>
                        
                         
                         
                    </ul>

					

       
     
    </>
  )
};

export default Menu;
