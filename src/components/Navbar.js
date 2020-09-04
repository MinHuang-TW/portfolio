import React from "react"
import { Logo } from "../components"
import PageLinks from "../constants/links"
import { MdMenu } from "react-icons/md"
import { Link } from "gatsby"

const Navbar = ({ toggleSidebar }) => (
  <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <div className="nav-logo">
          <Link to="/">
            <Logo size="38" />
          </Link>
        </div>

        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <MdMenu />
        </button>
      </div>
      <PageLinks styleClass="nav-links" />
    </div>
  </nav>
)

export default Navbar
