import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // dynamically get current year
  return (
    <footer className="footer">
      <p>© vickyarav {currentYear}</p>
    </footer>
  );
};

export default Footer;
