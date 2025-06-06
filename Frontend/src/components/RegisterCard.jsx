import { useState } from "react"
import authService from "../services/authService"
import { ToastContainer, toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import "./RegisterCard.css"

function RegisterCard() {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        nombre: "",
        apellidos: "",
        fecha_nacimiento: "",
        telefono: "",
        email: "",
        password: "",
        password2: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if (user.password !== user.password2) {
            toast.error("Las contraseñas no coinciden", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        authService.register(user)
            .then((response) => {
                console.log("Usuario registrado:", response);
                navigate("/login")
                // Aquí puedes redirigir al usuario a otra página o mostrar un mensaje de éxito
            })
            .catch((error) => {
                console.error("Error al registrar el usuario:", error);
                toast.error("Error al registrar el usuario", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    }

    return (
        <div className="register-card">
            <ToastContainer />
            <div className="register-header">
                <h2 className="register-title">Registrarse</h2>
            </div>
            <form className="register-form" onSubmit={handleSubmit}>
                <TextField
                    label="Nombres"
                    variant="outlined"
                    required
                    type="text"
                    value={user.nombre}
                    onChange={(e) => setUser({ ...user, nombre: e.target.value })} />
                <TextField
                    label="Apellidos"
                    variant="outlined"
                    required
                    type="text"
                    value={user.apellidos}
                    onChange={(e) => setUser({ ...user, apellidos: e.target.value })} />
                <TextField
                    variant="outlined"
                    required
                    type="date"
                    value={user.fecha_nacimiento}
                    onChange={(e) => setUser({ ...user, fecha_nacimiento: e.target.value })} />
                <TextField
                    label="Telefono"
                    variant="outlined"
                    required
                    type="tel"
                    value={user.telefono}
                    onChange={(e) => setUser({ ...user, telefono: e.target.value })} />
                <TextField
                    label="Email"
                    variant="outlined"
                    required
                    type="email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })} />
                <TextField
                    label="Contraseña"
                    variant="outlined"
                    required
                    type="password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })} />
                <TextField
                    label="Repita su contraseña"
                    variant="outlined"
                    required
                    type="password"
                    value={user.password2}
                    onChange={(e) => setUser({ ...user, password2: e.target.value })}
                />
                <div className="register-buttons">
                    <Button variant="contained" color="secondary" onClick={() => navigate("/login")}>
                        Volver
                    </Button>
                    <Button type="submit" variant="contained">Registro</Button>
                </div>
            </form>
        </div>
    )
}

export default RegisterCard