import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import AccountVerify from "./components/Accountverify/AccountVerify";
import Settings from "././components/Dashboard/Settings/Settings";
import Subscription from "./components/Dashboard/Subscription/Subscription";
import FarmerSignup from "./components/Signup/Farmersignup/FarmerSignup";
import B2BSignup from "./components/Signup/B2B/B2BSignup";
import AdminSignup from "./components/Signup/Adminsignup/AdminSignup";
import B2CSignup from "./components/Signup/B2C/B2CSignup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/settings" element={<Settings />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/farmer-signup" element={<FarmerSignup />} />
        <Route path="/b2b-signup" element={<B2BSignup />} />
        <Route path="/admin-signup" element={<AdminSignup />} />
        <Route path="/b2c-signup" element={<B2CSignup />} />
        <Route path="/account-verify" element={<AccountVerify />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
