import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ApplicationListContainer from "./containers/ApplicationListContainer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ApplicationListContainer />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </QueryClientProvider>
  );
};

export default App;
