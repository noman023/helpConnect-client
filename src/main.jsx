import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import routes from "./route/Route";
import "./index.css";
import AuthContextProvider from "./providers/AuthContext";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <RouterProvider router={routes} />
      </AuthContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
