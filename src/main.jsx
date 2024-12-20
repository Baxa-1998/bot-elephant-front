import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import * as Sentry from "@sentry/react";


Sentry.init({
    dsn: "https://045ac9ad7a4b9574189652236cc16f15@o4505114739605504.ingest.us.sentry.io/4508497227350016",
    integrations: [],
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <App />
  </StrictMode>,
)
