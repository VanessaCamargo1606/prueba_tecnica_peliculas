import { Link } from "react-router-dom";
import imagen from '../assets/placeholder.png';
import { Outlet } from 'react-router-dom';
import { Search } from "./Search";

const Home = () => {
  return <div>
  

    <header>
      <h1 className='title'></h1>
    </header>

    <nav>
      <ul>
        {/* <li>
          <Link to="/ProductosGrid" className='imagen' >
            Productos
          </Link>

        </li> */}

        {/* <li>
                <Link to="/Series" className='imagen'>
                  <img src={imagen} />Series
                </Link>
                 <Link to="/movies/" >
                  <MovieDetails />
                </Link>
                <Search />
              </li> */}

      </ul>
    </nav>
    <Outlet />
  </div>

}
export default Home;


