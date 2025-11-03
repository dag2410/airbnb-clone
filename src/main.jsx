import App from "./App.jsx";
import { persistor, store } from "./store";

import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { LoadingProvider } from "./context/LoadingContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { PersistGate } from "redux-persist/integration/react";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <LoadingProvider>
    <UserProvider>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </ReduxProvider>
    </UserProvider>
  </LoadingProvider>
);
