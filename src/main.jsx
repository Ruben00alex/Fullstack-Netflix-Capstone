import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

//import queryClient from "./queryClient";
import { QueryClientProvider } from "react-query";

import queryClient from "./react-query/client"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App className="bg-slate-600" />
  </QueryClientProvider>
      </BrowserRouter>
    </React.StrictMode>
);
