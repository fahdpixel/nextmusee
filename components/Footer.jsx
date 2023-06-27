"use client"
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-between">
            <div className="logo-social">
              <a href="">
                <img src="/logo.png" alt="logo" />
              </a>
              <ul style={{ transform: "translateX(30px)" }}>
                <li>
                  <Link href="https://www.facebook.com/museemusicalofficial">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/museemusical"
                    target="_blank"
                  >
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://youtube.com/@musee.musical" target="_blank">
                    <i className="fa fa-youtube" aria-hidden="true"></i>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="quick-links">
              <h4>Quick links</h4>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
              </ul>
            </div>

            <div className="quick-links">
              <h5>Information</h5>
              <ul>
                <li>
                  <Link href="/privacypolicy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/TermsofUse">Terms of Use</Link>
                </li>
                <li>
                  <Link href="/returnpolicy">Returns Policy</Link>
                </li>
                <li>
                  <Link href="/shippingpolicy">Shipping Policy</Link>
                </li>
              </ul>
            </div>

            <div className="contact-links">
              <h6>Contact Us</h6>
              <ul>
                <li>
                  <a
                    className="text-secondary"
                    target="_blank"
                    href="https://goo.gl/maps/1M68TMxcuZBPk6uPA"
                  >
                    <i className="fa fa-map-marker me-2"></i> 73, Anna Salai,
                    Chennai – 600 002
                  </a>
                </li>
                <li>
                  <a
                    className="text-secondary"
                    href="mailto:support@museemusical.in"
                  >
                    <i className="fa fa-envelope me-2"></i>{" "}
                    support@museemusical.in
                  </a>
                </li>
                <li>
                  <a className="text-secondary" href="tel:919940046621">
                    <i className="fa fa-phone me-2"></i> +91 9940046621
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
