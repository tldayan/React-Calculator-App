
import React from "react";
import ReactDOM from "react-dom/client";
import CalcDisplay from "../Components/calcDisplay";
import ButtonsGrid from "../Components/buttonsGrid";


function App() {

  return (
    <div className="main_container">
      <CalcDisplay />
      <ButtonsGrid />
    </div>
  )

}


const rootElement = document.getElementById(`root`)
const root = ReactDOM.createRoot(rootElement)
root.render(
  <App />
)