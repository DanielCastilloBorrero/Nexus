import { useState } from "react"
import "./RegisterCard.css"

function RegisterCard() {

    const [user, setUser] = useState({
        nombre: "",
        apellidos: "",
        fecha_nacimiento: "",
        telefono: "",
        email: "",
        password: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user)
    }

    return (
        <div className="register-card">
            <div className="register-header">
                <h2 className="register-title">Registrarse</h2>
            </div>
            <form className="register-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombres"
                    className="register-input"
                    onChange={(e) => setUser({ ...user, nombre: e.target.value })} />
                <input
                    type="text"
                    placeholder="Apellidos"
                    className="register-input"
                    onChange={(e) => setUser({ ...user, apellidos: e.target.value })} />
                <input
                    type="date"
                    placeholder="dd/mm/yyyy"
                    className="register-input"
                    onChange={(e) => setUser({ ...user, fecha_nacimiento: e.target.value })} />
                <input
                    type="tel"
                    placeholder="Telefono"
                    className="register-input"
                    onChange={(e) => setUser({ ...user, telefono: e.target.value })} />
                <input
                    type="email"
                    placeholder="Email"
                    className="register-input"
                    onChange={(e) => setUser({ ...user, email: e.target.value })} />
                <input
                    type="password"
                    placeholder="Contraseña"
                    className="register-input" />
                <input
                    type="password"
                    placeholder="Repita su contraseña"
                    className="register-input"
                />
                <button type="submit" className="register-button">Registro</button>
            </form>
        </div>
    )
}

export default RegisterCard