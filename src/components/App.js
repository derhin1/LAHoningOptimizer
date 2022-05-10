import React, { useState, useEffect } from "react";
// getAPIHealth is defined in our axios-services directory index.js
// you can think of that directory as a collection of api adapters
// where each adapter fetches specific info from our express server's /api route

const App = () => {
  return (
    <div className="app-container">
      <h2>Market Prices</h2>
    </div>
  );
};

export default App;
