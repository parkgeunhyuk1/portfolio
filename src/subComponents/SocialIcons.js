import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Facebook, Github, Twitter, YouTube } from "../components/AllSvgs";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;
const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) => props.theme.text};
`;

const SocialIcons = () => {
  return (
    <Icons>
      <div>
        <a href="https://github.com/parkgeunhyuk1" style={{ color: "inherit" }} target="_blank" >
          <Github width={25} height={25} fill="currentColor" />
        </a>
      </div>
      <div>
        <NavLink to="/" style={{ color: "inherit" }} target="_blank">
          <Twitter width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <div>
        <NavLink to="/" style={{ color: "inherit" }} target="_blank">
          <Facebook width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <div>
        <NavLink to="/" style={{ color: "inherit" }} target="_blank">
          <YouTube width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <Line />
    </Icons>
  );
};

export default SocialIcons;
