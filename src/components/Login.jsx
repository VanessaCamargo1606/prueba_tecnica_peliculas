import "./Login.css";
import { useState } from 'react';
import { ProductosGrid } from "./ProductosGrid";
import { Link } from "react-router-dom";

function Login() {

    const [isOpen, setIsOpen] = useState(false);

    const handleButtonClick = () => {
        event.preventDefault();
        setIsOpen(true);
    };

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Verificamos las credenciales
        if (username === 'vane' && password === '123') {
            // Credenciales válidas
            console.log('Inicio de sesión exitoso');
            window.alert("Bienvenido a nuestro sitio web");
            setError('');
        } else {
            // Credenciales inválidas, mostramos un mensaje de error
            setError('Credenciales incorrectas. Inténtalo de nuevo.');
            window.alert("Credenciales incorrectas");
        }
    };

    return <div>

        <form className="container" onSubmit={handleSubmit}>
            <div className="contenedor">
                <label className="detalle"><strong>Username</strong></label>
                <input type="text" id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
            </div>

            <div className="contenedorPass">
                <label className="detalle"><strong>Password</strong></label>
                <input type="text" id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button  className="btn" onClick={handleButtonClick}>Iniciar Sesión</button>
        </form>
        <div className="boton">

            <div className="ingresar">
                <Link to="/ProductosGrid" onClick={handleButtonClick} >
                    Ingresar
          </Link>
            </div>

            <div className="registrar">
                <Link to="/Registro" >
                    Registrar
          </Link>
            </div>
        </div>
        {isOpen && <ProductosGrid />}
        
    </div>
    
}
export default Login;
