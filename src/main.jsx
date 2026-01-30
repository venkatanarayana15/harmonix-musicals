import React from "react"
import ReactDOM from "react-dom/client"
import { HashRouter } from "react-router-dom"
import { HelmetProvider } from 'react-helmet-async';
import App from "./App"
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
import '@fontsource/outfit/400.css';
import '@fontsource/outfit/700.css';
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(

  <HelmetProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </HelmetProvider>

)
