import React from 'react'
import { Link } from 'react-router-dom'


const NavbarClone = () => {
  return (
    <nav id="navbar-clone" className="navbar is-fresh is-transparent" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://cssninja.io">
             <div className="title">ExamensProjekt</div>
          </a>
          <a href="#" className="navbar-item is-hidden-desktop is-hidden-tablet">
            <div id="menu-icon-wrapper" className="menu-icon-wrapper" style={{visibility: 'visible'}}>
              <svg width="1000px" height="1000px">
                <path className="path1" d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"></path>
                <path className="path2" d="M 300 500 L 700 500"></path>
                <path className="path3" d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"></path>
              </svg>
              <button id="menu-icon-trigger" className="menu-icon-trigger"></button>
            </div>
          </a>
          <a href="#" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="cloned-navbar-menu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="cloned-navbar-menu" className="navbar-menu is-fixed">
          <div className="navbar-start">
            <a className="navbar-item is-hidden-mobile">
              <div id="cloned-menu-icon-wrapper" className="menu-icon-wrapper" style={{visibility: 'visible'}}>
                <button id="cloned-menu-icon-trigger" className="menu-icon-trigger"></button>
              </div>
            </a>
          </div>

          <div className="navbar-end">
            <Link to="/" className="navbar-item is-secondary">
                Home
            </Link>
            <Link to="/Services" className="navbar-item is-secondary">
                Services
            </Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link className="navbar-link">
                  Dropdown
              </Link>

              <div className="navbar-dropdown">
                <a className="navbar-item">
                    Dropdown item
                </a>
                <a className="navbar-item">
                    Dropdown item
                </a>
                <a className="navbar-item">
                    Dropdown item
                </a>
              </div>
            </div>
            <Link to="/Login" className="navbar-item is-secondary modal-trigger" data-modal="auth-modal">
                Log in
            </Link>
            <a className="navbar-item">
              <Link to="/Register" className="button signup-button rounded secondary-btn raised">
                 Sign up
              </Link>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavbarClone
