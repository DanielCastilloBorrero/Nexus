import { Link, useNavigate } from "react-router-dom"
import "./Header.css"

function Header() {

    const navigate = useNavigate()

    const handleClick = (url) => {
        navigate(url)
    }

    return (
        <header className="header">
            <div className="header-logo-container">
                <Link to={"/"} className="header-logo">
                    <img src="/src/assets/Nexus_Logo.webp" alt="Application Logo" />
                </Link>
            </div>
            <nav className="nav">
                <a href="#features">FEATURES</a>
                <a href="#about">ABOUT</a>
                <button className="header-button" onClick={() => handleClick('/login')}>Iniciar Sesión</button>
                <button className="header-button" onClick={() => handleClick('/register')}> Registrarse</button>
            </nav>
        </header >
    )
}

export default Header