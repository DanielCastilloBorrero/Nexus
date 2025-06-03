import { Link } from "react-router-dom"
import { useState } from "react"
import authService from "../services/authService"
import { ToastContainer, toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Button from "@mui/material/Button"
import "./LoginCard.css"

function LoginCard() {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

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
                <TextField
                    type="email"
                    id="outlined-basic"
                    label="Email"
                    required
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    value={user.email} />
                <TextField
                    id="outlined-password-input"
                    label="Contraseña"
                    type={showPassword ? "text" : "password"}
                    required
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    value={user.password}
                />
                <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label={showPassword ? "Ocultar Contraseña" : "Mostrar Contraseña"}
                    labelPlacement="end"
                    onChange={() => setShowPassword(!showPassword)} />
                <Button variant="contained" type="submit" className="login-button">Ingresar</Button>
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