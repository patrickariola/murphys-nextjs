'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function Navbar() {
  return (
    <div className="navbar green-background fixed">
      <nav className="container-fluid justify-content-start">
        <ul className="nav justify-content-start">
          <li className="nav-item">
            <a className="navbar-brand" href="#">
              <img
                src="/mlogo.png"
                alt="Murphy's Logo"
                style={{ height: '70px', paddingLeft: '6rem' }}
                className="pb-2"
              />
            </a>
          </li>
        </ul>
        <ul className="nav justify-content-end" id="topMenu">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">St. Patrick&apos;s Day</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">To Go Ordering</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="bi bi-instagram" /></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="bi bi-facebook " /></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="bi bi-twitter" /></a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
