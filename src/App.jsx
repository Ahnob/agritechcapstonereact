import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home"
import AccountVerify from "./components/Accountverify/AccountVerify";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account-verify" element={<AccountVerify />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
