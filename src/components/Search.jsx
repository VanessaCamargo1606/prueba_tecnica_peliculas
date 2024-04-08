import "./Search.css";
//import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
//import { useHistory } from "react-router";
//import { useQuery } from "../hooks/useQuery";
import { useNavigate } from 'react-router-dom';

export function Search() {

    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate.push("/?search=" + searchText);

    }

    return (
        <div>
            <form className="searchContainer" onSubmit={handleSubmit}>
                <div className="searchBox">

                    <input className="searchInput" 
                    type="text" value={searchText} 
                    onChange={(e) => setSearchText(e.target.value)} />

                    <button className="searchButton" type="submit">
                        Buscar
                    </button>
                </div>
            </form>
        </div>
    )
}