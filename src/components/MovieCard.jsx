import "./MovieCard.css";
import { Link } from "react-router-dom";
//import { BrowserRouter as Router, Route } from "react-router-dom";
//import { MovieDetails } from "./components/MovieDetails";

export function MovieCard({ movie }) {

    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

    return <li className={'movieCard'}>
    
    <Link to={"/movies/" + movie.id}>   
    
        <img
            className={'movieImage'}
            src={imageUrl}
            alt={movie.title}
        />
        <div>{movie.title}</div>
        <div className='overview'>{movie.overview}</div>
        </Link>
    </li>

}




