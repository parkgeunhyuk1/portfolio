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
        <Github width={25} height={25} fill="currentColor" />
      </div>
      <div>
        <Twitter width={25} height={25} fill="currentColor" />
      </div>
      <div>
        <Facebook width={25} height={25} fill="currentColor" />
      </div>
      <div>
        <YouTube width={25} height={25} fill="currentColor" />
      </div>
      <Line />
    </Icons>
  );
};

export default SocialIcons;
