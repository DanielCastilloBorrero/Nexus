import { Link } from "react-router-dom"
import { useState } from "react"
import authService from "../services/authService"
import { ToastContainer, toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import "./LoginCard.css"

function LoginCard() {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        // Aquí puedes agregar la lógica para enviar los datos de inicio de sesión al servidor
        // Usando axios para hacer una solicitud POST
        authService.login(user)
            .then((response) => {
                console.log("Login successful:\n", response);
                toast.success("Inicio de sesión exitoso", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                // Aquí puedes manejar la respuesta del servidor, como redirigir al usuario a otra página
                setUser({
                    email: "",
                    password: ""
                })
                // Redirigir al usuario a la página de inicio o dashboard
                navigate("/dashboard")
            })
            .catch((error) => {
                console.error("Error during login:", error);
                // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario
                toast.error("Error al iniciar sesión", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                // Limpiar los campos de entrada
            });
    }

    return (
        <div className="login-card">
            <ToastContainer />
            <div className="login-header">
                <img src="/src/assets/Nexus_Logo.webp" alt="Application Logo" className="login-logo" />
                <h2 className="login-title">Iniciar Sesión</h2>
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    required
                    placeholder="Email"
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    value={user.email}
                    className="login-input" />
                <input
                    type="password"
                    required
                    placeholder="Contraseña"
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    value={user.password}
                    className="login-input" />
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