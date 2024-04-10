import { useState } from "react";
import "./App.css";
import { PeliculasGrid } from "./components/PeliculasGrid";
import { Series } from "./components/Series";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Routes, Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

//import { Switch } from 'react-router-dom';
import Layout from "./components/Layout";
import MovieDetails from "./components/MovieDetails";
import { MovieCard } from "./components/MovieCard";

function App() {
  return (
    <div>
      <header>
        <h1 className='title'>DEMO Streaming</h1>

        <h1 className='subtitle'>Popular Titles</h1>


      </header>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/PeliculasGrid" element={<PeliculasGrid />} >

          </Route>
          <Route path="/Series" element={<Series />} />
          <Route path="/movies/:id" element={<MovieDetails />} />

        </Route>


      </Routes>

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
