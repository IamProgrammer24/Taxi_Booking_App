import React from "react";
import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import UserLogin from "./pages/UserLogin";

import CaptainLogin from "./pages/CaptainLogin";
import UserSignup from "./pages/UserSignup";
import CaptainSignup from "./pages/CaptainSignu";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="captain-login" element={<CaptainLogin />} />
        <Route path="captain-signup" element={<CaptainSignup />} />
        start form 2.27
        {/*<Route path="/riding" element={<Riding />} />
        <Route path="/captain-riding" element={<CaptainRiding />} /> */}
      </Routes>
    </div>
  );
};

export default App;
