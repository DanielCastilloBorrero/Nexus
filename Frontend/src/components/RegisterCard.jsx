import { useState } from "react"
import authService from "../services/authService"
import { ToastContainer, toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
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
                <input
                    type="text"
                    value={user.nombre}
                    placeholder="Nombres"
                    className="register-input"
                    onChange={(e) => setUser({ ...user, nombre: e.target.value })} />
                <input
                    type="text"
                    value={user.apellidos}
                    placeholder="Apellidos"
                    className="register-input"
                    onChange={(e) => setUser({ ...user, apellidos: e.target.value })} />
                <input
                    type="date"
                    value={user.fecha_nacimiento}
                    placeholder="dd/mm/yyyy"
                    className="register-input"
                    onChange={(e) => setUser({ ...user, fecha_nacimiento: e.target.value })} />
                <input
                    type="tel"
                    value={user.telefono}
                    placeholder="Telefono"
                    className="register-input"
                    onChange={(e) => setUser({ ...user, telefono: e.target.value })} />
                <input
                    type="email"
                    value={user.email}
                    placeholder="Email"
                    className="register-input"
                    onChange={(e) => setUser({ ...user, email: e.target.value })} />
                <input
                    type="password"
                    value={user.password}
                    placeholder="Contraseña"
                    className="register-input"
                    onChange={(e) => setUser({ ...user, password: e.target.value })} />
                <input
                    type="password"
                    value={user.password2}
                    placeholder="Repita su contraseña"
                    className="register-input"
                    onChange={(e) => setUser({ ...user, password2: e.target.value })}
                />
                <button type="submit" className="register-button">Registro</button>
            </form>
        </div>
    )
}

export default RegisterCard