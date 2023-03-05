import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

// O ponto de exclamacao eh usado quando o typescript
// acha que o elemento pode nao existir
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
