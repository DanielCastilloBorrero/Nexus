import axios from "axios";

const API_URL = "http://localhost:8000";

const authService = {
    login: async (user) => {
        try {
            const response = await axios.post(`${API_URL}/auth/login`, {
                "email": user.email,
                "password": user.password
            });
            return response.data;
        } catch (error) {
            console.error("Error during login:", error);
            throw error;
        }
    },

    register: async (user) => {
        try {
            const response = await axios.post(`${API_URL}/usuarios/register`, {
                "nombre": user.nombre,
                "apellido": user.apellidos,
                "fecha_nacimiento": user.fecha_nacimiento,
                "telefono": user.telefono,
                "email": user.email,
                "password": user.password,
            });
            return response.data;
        } catch (error) {
            console.error("Error during registration:", error);
            throw error;
        }
    }
};
export default authService;