import { Link } from "react-router-dom"
import "./LoginCard.css"

function LoginCard() {
    return (
        <div className="login-card">
            <div className="login-header">
                <img src="/src/assets/Nexus_Logo.webp" alt="Application Logo" className="login-logo" />
                <h2 className="login-title">Iniciar Sesión</h2>
            </div>
            <form className="login-form">
                <input type="email" placeholder="Email" className="login-input" />
                <input type="password" placeholder="Contraseña" className="login-input" />
                <button type="submit" className="login-button">Ingresar</button>
            </form>
            <div className="login-footer">
                <a href="#" className="login-link">¿Olvidaste tu contraseña?</a>
                <hr className="separador" />
                <p className="register-text">
                    ¿No tienes una cuenta?
                    <Link to={"/register"} className="login-link"> Registrate aquí</Link>
                </p>
            </div>
        </div>
    )
}

export default LoginCard