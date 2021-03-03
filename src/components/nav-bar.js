import React from 'react';

const Navbar = () => {

  return (
      <div className="nav-bar-container">
            <h1>SPLIT</h1>
            <div className="assorted-nav-links"> 
                <a
                className="nav-bar-link"
                target="_blank"
                 rel="noreferrer"
                href={"http://drewshroyer.com"}
                > Portfolio
                </a>
                <a
                className="nav-bar-link"
                target="_blank"
                 rel="noreferrer"
                href={"https://www.linkedin.com/in/drew-shroyer/"}
                > LinkedIn
                </a>
                <div
                className="nav-bar-link"
                target="_blank"
                > Help
                </div>
            </div>
      </div>
    )
}

export default Navbar;