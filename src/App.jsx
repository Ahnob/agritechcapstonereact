import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import AccountVerify from "./components/Accountverify/AccountVerify";
import Subscription from "./components/Dashboard/Subscription/Subscription";
import FarmerSignup from "./components/Signup/Farmersignup/FarmerSignup";
import B2BSignup from "./components/Signup/B2B/B2BSignup";
import AdminSignup from "./components/Signup/Adminsignup/AdminSignup";
import B2CSignup from "./components/Signup/B2C/B2CSignup";
import Contactus from "./components/Contactus/Contactus";
import AboutUs from "./components/Aboutus/AboutUs";
import Onboarding from "./components/Alreadyhaveanaccount/Onboarding";
import Whatweoffer from "./components/Whatweoffer/Whatweoffer";
import Products from "./components/Products/Product";
import MarketPlace from "./components/Marketplace/Marketplace";
import SearchInput from "./components/searchinput/SearchInput";
import FilterButton from "./components/filter/FilterButton";
import MarketplaceDashboard from "./dashboard/Marketplace";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/whatweoffer" element={<Whatweoffer />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/farmer-signup" element={<FarmerSignup />} />
        <Route path="/b2b-signup" element={<B2BSignup />} />
        <Route path="/admin-signup" element={<AdminSignup />} />
        <Route path="/b2c-signup" element={<B2CSignup />} />
        <Route path="/account-verify" element={<AccountVerify />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Marketplace" element={<MarketPlace />} />
        <Route path="/searchinput" element={<SearchInput />} />
        <Route path="/filterbutton" element={<FilterButton />} />
        <Route
          path="/marketplacedashboard"
          element={<MarketplaceDashboard />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
