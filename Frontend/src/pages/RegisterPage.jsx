import RegisterCard from "../components/RegisterCard"
import "./RegisterPage.css"

function RegisterPage() {
    return (
        <div className="register-page">
            <div className="register-container">
                <img
                    src="/src/assets/regist-page.webp"
                    alt="Register Illustration"
                    className="register-image" />
                <RegisterCard />
            </div>
        </div>
    )
}

export default RegisterPage