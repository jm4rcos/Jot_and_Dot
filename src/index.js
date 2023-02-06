import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CanvasProvider } from "./context/CanvasContext";
import { GlobalStyle } from './themes/GlobalStyle'

ReactDOM.render(
  <>
    <GlobalStyle/>
    <CanvasProvider>
      <App />
    </CanvasProvider>
  </>,
  document.getElementById("root")
);
