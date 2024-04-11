import "./ProductoCard.css";
import { Link } from "react-router-dom";
//import { BrowserRouter as Router, Route } from "react-router-dom";


 export function ProductoCard({ producto }) {

    //  const imageUrl = "https://image.tmdb.org/t/p/w300" + producto.poster_path;
    const imageUrl = producto.poster_path;

     return <li className={'productoCard'}>
    
     <Link to={"/productos/" + producto.id}>   
    
         <img
             className={'productoImage'}
             src={imageUrl}
             alt={producto.title}
         />
         <div>{producto.title}</div>
         {/* <div className='overview'>{producto.overview}</div> */}
         </Link>
     </li>

 }











//  export function MovieCard({ movie }) {
    
//          const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;  
//          return <li className={'movieCard'}>
        
//          <Link to={"/movies/" + movie.id}>   
        
//              <img
//                 className={'movieImage'}
//                  src={imageUrl}
//                  alt={movie.title}
//              />
//              <div>{movie.title}</div>
//              <div className='overview'>{movie.overview}</div>
//             </Link>
//          </li>
    
//      }




