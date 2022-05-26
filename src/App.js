import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Setup from "./pages/Setup";
import Login from "./pages/Login";
import { useState } from "react";

const App = () => {
  const [setupComplete, setSetupComplete] = useState(false);
  const checkFirstRun = async () => {
    let result = await window.api.firstRun();
    setSetupComplete(result);
  };
  checkFirstRun();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={setupComplete ? <Login /> : <Setup />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
