import api from "./api.json";
import { ProductoCard } from "./ProductoCard";
import "./ProductosGrid.css";

import { useEffect, useState } from "react";


export function ProductosGrid() {

    const [movies, setMovies] = useState([]);
    return (

        // Mapea el listado de productos   

        <ul className={'productosGrid'}>

            {api.map((producto) => (
                <ProductoCard key={producto.id} producto={producto} />

            ))}

        </ul>


    );
}
