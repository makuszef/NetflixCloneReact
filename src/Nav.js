import "./Nav.css";
import React, { useEffect, useState } from "react";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    // if show is true
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://clipartstation.com/wp-content/uploads/2018/10/netflix-clipart-3.png"
        alt="netflix logo"
      />
      <img
        className="nav__avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="netflix avatar"
      />
    </div>
  );
}

export default Nav;
