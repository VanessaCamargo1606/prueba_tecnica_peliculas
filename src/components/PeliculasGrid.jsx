import api from "./api.json";
import { MovieCard } from "./MovieCard";
import "./PeliculasGrid.css";

import { useEffect, useState } from "react";
import { get } from "./httpClient";
import { useLocation } from "react-router";

export function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

export function PeliculasGrid() {

    const location = useLocation();

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const query = useQuery();
    const search = query.get("search");
 
// Funcion para realizar la busqueda por nombre sino traer todas las peliculas

    useEffect(() => {
        setIsLoading(true);
        const searchUrl = search
          ? "/search/movie?query=" + search
          : "/discover/movie";
        get(searchUrl).then((data) => {
          setMovies(data.results);
          setIsLoading(false);
        });
      }, [search]);

    return (

        // Mapea el listado de peliculas y series
        //className={styles.moviesGrid}
        
        
        <ul className={'moviesGrid'}>
        
            {api.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />

            ))}

        </ul>

    );
}
