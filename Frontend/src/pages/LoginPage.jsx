import LoginCard from "../components/LoginCard"
import "./LoginPage.css"

function LoginPage() {
    return (
        <div className="login-page">
            <div className="login-container">
                <img
                    src="/src/assets/inventario.webp"
                    alt="Login Illustration"
                    className="login-image" />
                <LoginCard />
            </div>
        </div>
    )
}

export default LoginPage