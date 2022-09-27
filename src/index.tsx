import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { AxiosInstanceProvider } from "./context/Axioscontext";
import "./reset.css";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
      keepPreviousData: true,
    },
  },
});

const BASE_URL = "https://www.deckofcardsapi.com/api";

const axiosconfig = {
  baseURL: BASE_URL,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AxiosInstanceProvider config={axiosconfig}>
        <App />
      </AxiosInstanceProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
