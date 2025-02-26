import { Layout, Menu, Button, Drawer } from "antd";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const menuItems = [
    { key: "home", label: <Link to="/home">Home</Link> },
    { key: "login-info", label: "Login Info" },
    { key: "cart", label:<Link to="/my-cart">Cart</Link> },
    { key: "about", label: "About" },
    { key: "contact", label: "Contact Us" },
    { key: "logout", label: "Log Out" },
  ];

  return (
    <Layout.Header className="bg-white shadow-md fixed w-full top-0 z-50 px-6 flex items-center">
      {/* Brand Logo (Left) */}
      <div className="text-2xl font-bold text-primary">
        <Link to="/">Brand</Link>
      </div>

      {/* Centered Desktop Menu - Fixed Width */}
      <div className="hidden md:flex flex-1 justify-center">
        <Menu
          theme="light"
          mode="horizontal"
          className="border-none flex justify-center min-w-[500px] max-w-[700px]"
          items={menuItems}
        />
      </div>

      {/* Mobile Menu Button (Right) */}
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
      </Drawer>
    </Layout.Header>
  );
};

export default Navbar;
