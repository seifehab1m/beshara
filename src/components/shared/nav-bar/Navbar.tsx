import { Layout, Menu, Button, Drawer, message } from "antd";
import { useState, useEffect } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<{
    firstName: string;
    lastName: string;
  } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("activeUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser({
        firstName: parsedUser.firstName,
        lastName: parsedUser.lastName,
      });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("activeUser");
    message.success("Logged out successfully! ✅");
    navigate("/login");
  };

  const toggleMenu = () => {
    setOpen(!open);
  };

  const menuItems = [
    { key: "home", label: <Link to="/">Home</Link> },
    { key: "cart", label: <Link to="/my-cart">Cart</Link> },
    { key: "about", label: <Link to="/about">About</Link> },
    { key: "contact", label: <Link to="/contactus">Contact Us</Link> },
  ];

  return (
    <Layout.Header className="!bg-[#f9fafb] shadow-md fixed w-full top-0 z-50 flex items-center px-4">
      {/* Logo */}
      <div className="text-2xl font-bold text-primary">
        <Link to="/">Beshara</Link>
      </div>

      {/* Desktop Menu */}
      <div className="!bg-[#f9fafb] hidden md:flex flex-1 justify-center">
        <Menu
          mode="horizontal"
          className="border-none flex justify-center min-w-[500px] max-w-[700px]"
          items={menuItems}
        />
      </div>

      {/* User Info + Logout */}
      <div className="hidden md:flex items-center gap-4 ml-auto">
        {user && (
          <span className="font-medium text-gray-700">
            {user?.firstName} {user?.lastName}
          </span>
        )}
        <Button type="primary" danger onClick={handleLogout}>
          Log Out
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <Button
        type="text"
        icon={<MenuOutlined className="text-2xl md:hidden" />}
        onClick={toggleMenu}
        className="ml-auto"
      />

      {/* Mobile Drawer Menu */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={toggleMenu}
        open={open}
        className="md:hidden"
      >
        <Menu mode="vertical" items={menuItems} />
        {user && (
          <div className="mt-4 px-4 text-lg font-semibold">
            {user?.firstName} {user?.lastName}
          </div>
        )}
        <Button
          type="primary"
          danger
          block
          className="mt-4"
          onClick={handleLogout}
        >
          Log Out
        </Button>
      </Drawer>
    </Layout.Header>
  );
};

export default Navbar;
