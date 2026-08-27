import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

// 🧪 Unseren professionellen Axios-Test importieren
import { runAxiosTest } from './sandbox/apiTest.ts'

// Den Test direkt beim Anwendungsstart im Browser ausführen
runAxiosTest();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)