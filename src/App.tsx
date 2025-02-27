import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/nav-bar/Navbar";
import Signup from "./pages/Signup";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/MyCart";
import Login from "./pages/Login";

function AppContent() {
  const location = useLocation();
  const hideNavbarRoutes = ["/sign-up","/login"]; // Define routes where Navbar should be hidden

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
