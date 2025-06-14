import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css'
import App from './App.jsx'
import { CssBaseline } from '@mui/material';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CssBaseline />
    <App />
  </BrowserRouter>,
)
