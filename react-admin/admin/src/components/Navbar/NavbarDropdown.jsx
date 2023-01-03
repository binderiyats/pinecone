import { useState } from "react";

export default function NavbarDropdown({ picture, items }) {
  const [showDropdown, setShowDropDown] = useState(false);
  const toggleDropDown = () => {
    setShowDropDown(!showDropdown);
  };

  return (
    <div className="dropdown text-end ">
      <a
        onClick={toggleDropDown}
        href="#"
        className="d-block link-dark text-decoration-none dropdown-toggle"
      >
        <img
          src={picture}
          alt="mdo"
          width="32"
          height="32"
          className="rounded-circle"
        />
      </a>
      <ul
        className={`dropdown-menu text-small  end-0 ${showDropdown && "show"}`}
      >
        {items.map((item) => {
          return (
            <li>
              <a className="dropdown-item" href={item.link}>
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
