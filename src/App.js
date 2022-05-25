import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Setup from "./pages/Setup";
import Login from "./pages/Login";

const App = () => {
  let firstRun = window.api.firstRun();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={firstRun ? <Setup /> : <Login />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
