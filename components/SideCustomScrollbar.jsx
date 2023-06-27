"use client"
import React from "react";
import { Accordion } from "react-bootstrap";

const SideCustomScrollbar = () => {
  return (
    <div className="togle-menu">
      <div className="togmenu-header">
        <a className="clse-menu">
          <img src="/close.png" alt="close" />
        </a>
        <h1>
          What are you looking
          <br /> for today?
        </h1>
      </div>
      <div className="togmenu-lists">
        <Accordion defaultActiveKey="0">
          <Accordion.Item >
            <Accordion.Header>name</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li className="d-flex align-items-start">
                  -<button className="sidemenu-button">name</button>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default SideCustomScrollbar;
