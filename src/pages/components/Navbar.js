import React, { useRef, useEffect, useState } from "react";
import { Link } from "gatsby";
import { IoIosMenu, IoIosClose } from "react-icons/io";

const Navbar = () => {
  const refContain = useRef(null);
  const refParent = useRef(null);
  const [isTrue, setIsTrue] = useState(false);

  useEffect(() => {
    if (refContain.current) {
      const Height = refContain.current.getBoundingClientRect().height;
      if (isTrue) {
        refParent.current.style.height = `${Height}px`;
        refParent.current.style.transition = "transition  .3s";
      } else {
        refParent.current.style.height = "0px";
      }
    }
  }, [isTrue]);

  return (
    <section className="section-center">
      <nav className="nav-container">
        <div className="nav-left">
          <div className="nav-logo">
            <Link to="/">
              <h1>SimplyRecipes</h1>
            </Link>
            <button className="nav-button" onClick={() => setIsTrue(!isTrue)}>
              {isTrue ? <IoIosClose /> : <IoIosMenu />}
            </button>
          </div>
        </div>
        <div className="nav-contact-con" ref={refParent}>
          <div className="nav-con" ref={refContain}>
            <div className="nav-link">
              <ul>
                <li>
                  <Link to="/" activeClassName="active-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" activeClassName="active-link">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/recipes" activeClassName="active-link">
                    Recipes
                  </Link>
                </li>
                <li>
                  <Link to="/tags" activeClassName="active-link">
                    Tags
                  </Link>
                </li>
              </ul>
            </div>
            <button className="nav-contact">
              <Link to="/contact">Contact</Link>
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
