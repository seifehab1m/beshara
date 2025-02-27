import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/shared/nav-bar/Navbar";
import Signup from "./pages/Signup";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/MyCart";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/shared/protected-route/ProtectedRoute";
import About from "./pages/About";
import Contactus from "./pages/Contactus";

function AppContent() {
  const location = useLocation();
  const hideNavbarRoutes = ["/sign-up", "/login"]; 

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        {/* Public Routes */}
        <Route path="/sign-up" element={<Signup />} />
        <Route index path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/my-cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contactus />} />
        </Route>
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
