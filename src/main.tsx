import React from "react"
import ReactDOM from "react-dom/client"
import "../bootstrap-5.3.0-alpha3-dist/css/bootstrap.css"
import "../src/styles/main.css"
import { Sidebar } from "./components/Sidebar"
import { CurrentMusic } from "./components/CurrentMusic"
import { Player } from "./components/Player"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="d-flex m-0 h-100">
      <Sidebar />
      <div className="right overflow-y-auto">
        <CurrentMusic />
        <Player />
      </div>
    </div>
  </React.StrictMode>
)
