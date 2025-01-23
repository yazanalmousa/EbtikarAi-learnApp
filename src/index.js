import React from "react";
import ReactDOM from "react-dom/client";
import Providers from "./providers";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Providers>
    <App />
  </Providers>
);
