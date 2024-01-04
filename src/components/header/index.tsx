import React from "react";
import { useNavigate } from "react-router";
import { Navbar } from "../home/subcomponents";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Navbar>
      <ul>
        <li
          onClick={() => {
            navigate("/");
          }}
        >
          <span>Home</span>
        </li>
        <li
          onClick={() => {
            navigate("/about");
          }}
        >
          <span>About</span>
        </li>
        <li>
          <span>Project</span>
        </li>
      </ul>
    </Navbar>
  );
};

export default Header;
