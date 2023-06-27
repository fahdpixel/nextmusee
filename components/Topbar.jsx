import Link from "next/link";
import React from "react";
import "../app/globals.css";

const Topbar = () => {
  return (
      <div className="web-menu">
        <div className="top-bar">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="top-logo">
                    <Link href="/">
                      <img src="/logo.svg" alt="logo" />
                    </Link>
                  </div>
                  <div className="top-search">
                    <div className="form-data bluebg" id="parent_search_tab">
                      <input
                        className="src-blnk pe-5"
                        id="search-input"
                        type="search"
                        placeholder="Search..."
                      />
                      <ul className="list-group src-fndings " id="searchPane">
                        <li className="list-group-item list-group-item-action">
                          <Link href="/" className="w-100">
                            <div className="w-100 m-flex">
                              <div className="w-20 bg-white text-center ">
                                <img src="image" alt="item.product_name" />
                              </div>
                              <div className="w-80 ps-3">
                                <label>item.product_name</label>
                                <span>Home</span>
                              </div>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="top-icons">
                    <ul>
                      <li>
                        <Link href="/">
                          <img src="/cart.png" alt="cart" />
                          <span className="cart-tpimg">5</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <img src="/user.png" alt="user" />
                        </Link>
                      </li>

                      <li>
                        <span>
                          <img src="/logout.png" alt="logout" />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Topbar;
