import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const isAuthenticated = localStorage.getItem("userData"); // Check if user is logged in

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}
