import React from "react"
import SocialLinks from "../constants/socialLinks"
import { Link } from "gatsby"
import { FiMail } from "react-icons/fi"

const data = [
  { id: 1, text: "home", url: "/" },
  { id: 2, text: "project", url: "/project/" },
  { id: 3, text: "blog", url: "/blog/" },
  { id: 4, text: "about", url: "/about/" },
]

const Footer = () => (
  <footer className="footer">
    <div className="section-center">
      <div className="footer-container">
        <div className="footer-link-block">
          <h3 className="footer-subtitle">Navigate to</h3>
          <ul className={`page-links footer-links`}>
            {data.map(({ id, text, url }) => (
              <li key={id}>
                <Link to={url} activeClassName="footer-link-selected">
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-media-block">
          <h3 className="footer-subtitle">Find out More</h3>
          <SocialLinks />
          <div className="mail-block">
            <FiMail className="service-icon" />
            <h4>h.min719@gmail.com</h4>
          </div>
        </div>

        <div className="footer-form-block">
          <h3 className="footer-subtitle">Leave Me a Message</h3>
          <form
            action="https://formspree.io/mzbjjrrd"
            method="POST"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="footer-form">
              <textarea name="message" placeholder="message" rows="5" />
              <div>
                <input type="email" name="email" placeholder="your email" />
                <button type="submit" className="btn footer-btn">
                  submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <small>
        &copy; {new Date().getFullYear()} MIN HUANG. All rights reserved
      </small>
    </div>
  </footer>
)

export default Footer
