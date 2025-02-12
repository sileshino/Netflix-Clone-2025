import React from "react";
import "./Footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        {/* Social Media Icons */}
        <div className="footer_icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FacebookOutlinedIcon className="icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramIcon className="icon" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <YouTubeIcon className="icon" />
          </a>
        </div>

        {/* Footer Links */}
        <div className="footer_data">
          <div>
            <ul>
              <li><a href="/audio-description">Audio Description</a></li>
              <li><a href="/investor-relations">Investor Relations</a></li>
              <li><a href="/legal-notices">Legal Notices</a></li>
            </ul>
          </div>
          <div>
            <ul>
              <li><a href="/help-center">Help Center</a></li>
              <li><a href="/jobs">Jobs</a></li>
              <li><a href="/cookie-preferences">Cookie Preferences</a></li>
            </ul>
          </div>
          <div>
            <ul>
              <li><a href="/gift-cards">Gift Cards</a></li>
              <li><a href="/terms-of-use">Terms of Use</a></li>
              <li><a href="/corporate-information">Corporate Information</a></li>
            </ul>
          </div>
          <div>
            <ul>
              <li><a href="/media-center">Media Center</a></li>
              <li><a href="/privacy">Privacy</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Service Code */}
        <div className="service_code">
          <p>Service Code</p>
        </div>

        {/* Copyright Info */}
        <div className="copy-write">
          &copy; 1997-2024 Netflix, Inc.
        </div>
      </div>
    </div>
  );
};

export default Footer;