import React from "react";
import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import UserLogin from "./pages/UserLogin";

import CaptainLogin from "./pages/CaptainLogin";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="captain-login" element={<CaptainLogin />} />
        {/*<Route path="/riding" element={<Riding />} />
        <Route path="/captain-riding" element={<CaptainRiding />} /> */}
      </Routes>
    </div>
  );
};

export default App;
