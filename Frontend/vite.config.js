import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, //Escucha en todas las direcciones IP públicas y locales
    port: 5173  //Asegúrate de que este puerto coincida con el que usa tu servidor de desarrollo
  }
})
