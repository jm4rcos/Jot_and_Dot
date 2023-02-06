import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CanvasProvider } from "./context/CanvasContext";
import { GlobalStyle } from './themes/GlobalStyle'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <CanvasProvider>
      <App />
    </CanvasProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
