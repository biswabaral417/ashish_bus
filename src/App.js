import "./css/App.css";
import "./css/dark.css";
import "./css/light.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserHome from "./components/userComps/UserHome";
import Header from "./components/Header";
import UserServices from "./components/userComps/UserServices";
import UserAccount from "./components/userComps/UserAccount";
import UserTickets from "./components/userComps/UserTickets";
import CustomerCare from "./components/userComps/CustomerCare";
import NavContextProvider from "./contexts/NavContext";
import Login from "./components/userComps/Login";
import Signup from "./components/userComps/Signup";
import UserContextProvider from "./contexts/UserContext";
import ChangePassword from "./components/userProfileActions/ChangePassword";
function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <NavContextProvider>
          <Header />
        </NavContextProvider>
        <Routes>
          <Route path="/" element={<UserHome />} />
          <Route path="/services" element={<UserServices />} />
          <Route path="/mytickets" element={<UserTickets />} />
          <Route path="/account" element={<UserAccount />} />
          <Route path="/customer_care" element={<CustomerCare />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/changePassword" element={<ChangePassword/>}/>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;