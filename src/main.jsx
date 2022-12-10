import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

//import queryClient from "./queryClient";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <BrowserRouter>
        <App className="bg-slate-600" />
      </BrowserRouter>
    </React.StrictMode>
  </QueryClientProvider>
);
