import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
// 최상위 컴포넌트 감싸주기 위해

// import './index.css'
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* 최상위 컴포넌트를 감싸준다 */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
