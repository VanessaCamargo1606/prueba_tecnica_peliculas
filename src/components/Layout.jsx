import { Link } from "react-router-dom";
import imagen from '../assets/placeholder.png';
import { Outlet } from 'react-router-dom';
//import { MovieDetails } from "./MovieDetails";
import { Search } from "./Search";

const Layout = () =>{
    return <div>
            <nav>
            <ul>
              <li>
                <Link to="/PeliculasGrid" className='imagen' >
                 <img src={imagen} />Peliculas
                </Link>
  
              </li>
              <li>
                <Link to="/Series" className='imagen'>  
                  <img src={imagen} />Series
                </Link>
                {/* <Link to="/movies/" >  
                  <MovieDetails />
                </Link> */}
                <Search />
              </li>
            </ul>          
          </nav>

        <Outlet />
    </div>
        
}
export default Layout;


