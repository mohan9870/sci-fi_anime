import React, { useState, useEffect } from "react";
import "./NavBar.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { BsBookmarkStar } from "react-icons/bs";
import { RiUser3Line } from "react-icons/ri";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  useEffect(() => {
    const path = location.pathname;
    if (path.includes("/profile")) setActiveMenu("Profile");
    else if (path.includes("/mylist")) setActiveMenu("MyList");
    else if (path.includes("/movie")) setActiveMenu("Movies");
    else if (path.includes("/subscription") || path.includes("/subscriptionplans"))
      setActiveMenu("Subscription");
    else setActiveMenu("Home");
  }, [location.pathname]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);
  const handleMenuClick = (item) => {
    setActiveMenu(item);
    closeMenu();
  };

  const handleSignOut = () => {
    navigate("/");
  };

  return (
    <div className="navbar-main sci-fi-glow">
      <div className="nav-container">
        <div className="nav_logo neon-logo" onClick={() => navigate("/")}>
          NΞØ·OTT
        </div>

        <ul className="nav-list desktop">
          {["Home", "Movies", "Subscription"].map((item, idx) => (
            <li
              key={idx}
              className={activeMenu === item ? "nav-item active" : "nav-item"}
            >
              <Link
                to={
                  item === "Home"
                    ? "/home"
                    : item === "Movies"
                    ? "/movie"
                    : "/subscriptionplans"
                }
                onClick={() => handleMenuClick(item)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* 🔍 Search bar */}
        <div className="nav-search">
          <input type="text" placeholder="Search..." />
        </div>

        <div className="nav-icons">
          <Link to="/profile" onClick={() => handleMenuClick("Profile")}>
            <RiUser3Line
              className={`nav-icon ${activeMenu === "Profile" ? "active" : ""}`}
              title="Profile"
            />
          </Link>
          <Link to="/mylist" onClick={() => handleMenuClick("MyList")}>
            <BsBookmarkStar
              className={`nav-icon ${activeMenu === "MyList" ? "active" : ""}`}
              title="My List"
            />
          </Link>
          <button onClick={handleSignOut} className="sign-out-btn" title="Sign Out">
            <FiLogOut className="nav-icon" />
          </button>
        </div>

        <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu-modal">
          <div className="mobile-menu-content">
            <ul className="mobile-nav-list">
              {["Home", "Movies", "Subscription"].map((item, idx) => (
                <li
                  key={idx}
                  className={
                    activeMenu === item ? "mobile-nav-item active" : "mobile-nav-item"
                  }
                >
                  <Link
                    to={
                      item === "Home"
                        ? "/"
                        : item === "Movies"
                        ? "/movie"
                        : "/subscriptionplans"
                    }
                    onClick={() => handleMenuClick(item)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mobile-menu-icons">
              {[
                { to: "/profile", icon: RiUser3Line, label: "Profile" },
                { to: "/mylist", icon: BsBookmarkStar, label: "My List" },
              ].map(({ to, icon: Icon, label }, idx) => (
                <Link
                  key={idx}
                  to={to}
                  onClick={() => handleMenuClick(label)}
                  className={`mobile-icon-item ${
                    activeMenu === label ? "active" : ""
                  }`}
                >
                  <Icon className="mobile-nav-icon" />
                  <span className="icon-label">{label}</span>
                </Link>
              ))}

              <button
                onClick={handleSignOut}
                className="mobile-icon-item mobile-sign-out-btn"
              >
                <FiLogOut className="mobile-nav-icon" />
                <span className="icon-label">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
