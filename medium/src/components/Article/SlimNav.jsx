import { useState } from "react";
import LogoSmall from "../../IMGS/LogoSmall.svg";
import MainButton from "./MainButton";
import SearchIcon from "./SearchIcon.jsx";
import WriteIcons from "./WriteIcons";
import profilePic from "../../IMGS/propic.png";

export default function SlimNav() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <div className="d-flex justify-content-between py-2 px-4 slim-nav">
      <div className="d-flex">
        <img src={LogoSmall} className="me-3" />
        <form className="position-relative">
          <input
            type="text"
            className="form-control search-input "
            placeholder=" Search Medium"
          />
          <button className="btn search-button rounded-5">
            <SearchIcon />
          </button>
        </form>
      </div>
      <div>
        <ul className="slim-nav-menu d-flex align-items-center">
          <li>
            <a href="#" className="slim-nav-link">
              <WriteIcons />
              Write
            </a>
          </li>
          <li>
            <MainButton href="#">Sign up</MainButton>
          </li>
          <li>
            <a href="#" className="slim-nav-link">
              Sign In
            </a>
          </li>
          <li>
            <div className="dropdown text-end">
              <a
                onClick={toggleDropdown}
                href
                className="d-block link-dark text-decoration-none dropdown-toggle"
                aria-expanded="false"
              >
                <img
                  src={profilePic}
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle  bg-white"
                />
              </a>
              <ul
                className={`dropdown-menu text-small end-0 ${
                  showDropdown && "show"
                }`}
              ></ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
