import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

//import queryClient from "./queryClient";
import { QueryClientProvider } from "react-query";

import queryClient from "./react-query/client";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div className=" flex flex-col min-h-[100vh] ">
          <App className="bg-slate-600 flex-grow h-screen " />
          <Footer className="mt-auto" />
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
