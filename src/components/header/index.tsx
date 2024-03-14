import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  HamburgerIcon,
  Navbar,
  OffCanvaContainer,
  OffCanvaWrappper,
} from "../home/subcomponents";

const Header = () => {
  const navigate = useNavigate();
  const [showCanva, setShowCanva] = useState(false);
  return (
    <Navbar>
      <div className='Mobile'>
        <HamburgerIcon
          className="bx bx-menu"
          onClick={() => {
            setShowCanva(!showCanva);
          }}
        />
      </div>
      <OffCanvaWrappper>
        <OffCanvaContainer
          onHide={() => {
            setShowCanva(false);
          }}
          show={showCanva}
          placement={"top"}
          responsive="lg"
        >
          <OffCanvaContainer.Header closeButton>
            <div style={{ visibility: "hidden" }}>ML</div>
          </OffCanvaContainer.Header>
          <OffCanvaContainer.Body>
            <ul>
              <li
                onClick={() => {
                  navigate("/");
                  setShowCanva(false);
                }}
              >
                {" "}
                <span>Home</span>
              </li>
              <li
                onClick={() => {
                  navigate("/about");
                  setShowCanva(false);
                }}
              >
                {" "}
                <span>About</span>
              </li>
              <li
                onClick={() => {
                  navigate("/project");
                  setShowCanva(false);
                }}
              >
                <span>Project</span>
              </li>
            </ul>
          </OffCanvaContainer.Body>
        </OffCanvaContainer>
      </OffCanvaWrappper>
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
        <li
          onClick={() => {
            navigate("/project");
          }}
        >
          <span>Project</span>
        </li>
      </ul>
    </Navbar>
  );
};

export default Header;
