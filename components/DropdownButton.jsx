import React, { useRef, useState } from "react";
import { GoTriangleDown } from "react-icons/go";

function DropdownButton() {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <>
      <button
        onClick={onClick}
        className={`dropdown-button ${
          isActive ? "btn-active" : "btn-inactive"
        }`}
      >
        <span className="bs-icon">
          <GoTriangleDown />
        </span>
        <span>All</span>
      </button>
      <nav
        ref={dropDownRef}
        className={`menu ${isActive ? "nav-active" : "nav-inactive"}`}
      >
        <ul>
          <li>
            <a href="#">All</a>
          </li>
          <li>
            <a href="#">Images</a>
          </li>
          <li>
            <a href="#">Videos</a>
          </li>
          <li>
            <a href="#">Gifs</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default DropdownButton;
