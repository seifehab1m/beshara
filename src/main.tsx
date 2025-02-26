import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import AntProvider from "./providers/AntProvider.tsx";
import "./assets/styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <AntProvider>
        <App />
      </AntProvider>
    </Provider>
  </StrictMode>
);
