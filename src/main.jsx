import App from "./App.jsx";
import "./styles/index.css";
import { persistor, store } from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { LoadingProvider } from "./context/LoadingContext.jsx";
// import { UserProvider } from "./context/UserContext.jsx";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "./components/ThemeProvider/index.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 5,
      retry: 1,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      refetchOnMount: false,
    },
    mutations: {
      retry: 1,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <LoadingProvider>
    <QueryClientProvider client={queryClient}>
      {/* <UserProvider> */}
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <App />
            <Toaster richColors position="top-right" />
          </ThemeProvider>
        </PersistGate>
      </ReduxProvider>
      {/* </UserProvider> */},
    </QueryClientProvider>
  </LoadingProvider>,
);
