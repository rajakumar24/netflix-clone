import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  //header black animation
  const [show, handleShow] = useState(false);

  //header black animation
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
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Lgo_Netflix.png"
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400*400.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
