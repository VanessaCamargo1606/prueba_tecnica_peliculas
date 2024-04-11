import { useState } from "react";
import "./App.css";
import { ProductosGrid } from "./components/ProductosGrid";
import  Login  from "./components/Login"
import  Registro  from "./components/Registro"
import { BrowserRouter as Router, Route } from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import { Routes, Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Home from "./components/Home";

//importar los modulos de firebase

// import appFirebase from "./components/credenciales";
// import { getAuth, onAuthStateChanged } from 'firebase/auth'
// const auth = getAuth(appFirebase)


function App() {

  const [usuario, setUsuario] = useState(null)

  // onAuthStateChanged(auth, (usuarioFirebase) => {
  //   if (usuarioFirebase) {
  //     setUsuario(usuarioFirebase)
  //   }
  //   else {
  //     setUsuario(null)
  //   }

  // })

  return (
    <div>
      <header>
        <h1 className='title'>LOGIN</h1>
      </header>

      {usuario ? <Home correoUSuario={usuario.email} /> : <Login />}
    


       <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/ProductosGrid" element={<ProductosGrid />} >
          </Route>
          <Route path="/Registro" element={<Registro />} >
          </Route>
        </Route>
      </Routes>




      {/* <Route path="/Series" element={<Series />} /> */}
      {/* <Route path="/movies/:id" element={<MovieDetails />} /> */}
      {/* <main>
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
            </li>
          </ul>          
        </nav>
      </main> */}

      {/* <Outlet /> */}

      {/* <PeliculasGrid /> */}

    </div>

  );
}

export default App;
