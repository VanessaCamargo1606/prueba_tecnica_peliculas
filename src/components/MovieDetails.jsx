import './MovieDetails.css';

import movie from "./details.json";

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { get } from "./httpClient";


function MovieDetails() {
    // return <h1 className="detalle">Detalles</h1>;     
    
       const { movieId } = useParams();
       const [movie, setMovie] = useState(null);
    
    //    useEffect(() => {
    //      get("/movie/" + movieId).then((data) => {
    //        setMovie(data);
    //      });
    //    }, [movieId]);
    
    //    if (!movie) {
    //     return null;
    //    }
    
      const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
      return (
        <div className={'detailsContainer'}>
          <img
            className={`${'col'} ${'movieImage'}`}
            src={imageUrl}
            alt={movie.title}
          />
          <div className={`${'col'} ${'movieDetails'}`}>
            <p className={'firstItem'}>
              <strong>Title:</strong> {movie.title}
            </p>
            {/* <p>
              <strong>Genres:</strong>{" "}
              {movie.genre_ids.map((genre) => genre.name).join(", ")}
            </p> */}
            <p>
              <strong>Description:</strong> {movie.overview}
            </p>
          </div>
        </div>
      );
    }


export default MovieDetails;