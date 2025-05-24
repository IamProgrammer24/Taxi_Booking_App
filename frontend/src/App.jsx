import React from "react";
import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import UserLogin from "./pages/UserLogin";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        {/*<Route path="/riding" element={<Riding />} />
        <Route path="/captain-riding" element={<CaptainRiding />} /> */}
      </Routes>
    </div>
  );
};

export default App;
