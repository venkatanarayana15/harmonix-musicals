import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
import '@fontsource/outfit/400.css';
import '@fontsource/outfit/700.css';
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(

  <BrowserRouter>
    <App />
  </BrowserRouter>
)
