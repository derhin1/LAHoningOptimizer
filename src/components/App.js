import React from "react";
import { PriceInputs, UpgradeInputs, Title } from "./";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div className="app-container">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
      <Title />
      <PriceInputs />
      <UpgradeInputs />
    </div>
  );
};

export default App;
