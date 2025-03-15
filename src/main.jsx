import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Calculater } from "./Components/Calculater";
// import { App } from "./App";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App/> */}
    <Calculater/>
    
  </StrictMode>
);
