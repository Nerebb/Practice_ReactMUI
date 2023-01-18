import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JobDetail from "./pages/JobDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/job/:id" element={<JobDetail />} />
      </Route>

      <Route path="*" element={<div>Nothing to show here!</div>} />
    </Routes>
  );
}
export default App;
