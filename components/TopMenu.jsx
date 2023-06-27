import React from "react";

const TopMenu = () => {
  return (
    <header id="headerNavbar">
      <div className="container">
        <div className="row">
          <div className="col">
            <nav id="cssmenu">
              <div className="srch-btn">
                <button className="clk-src">
                  <img src="/srch.png" />
                </button>
              </div>
              <div className="button menu-opened"></div>
              <ul className="menu-open">
                <li className="having-hamber">
                  <a className="toggle-button">
                    <img src="/hamber.png" alt="hamber" />
                    All
                  </a>
                </li>

                <li>
                  <button className="menu-link active">name</button>
                </li>

                <li>
                  <button className="menu-link">Shop by Brand</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopMenu;
