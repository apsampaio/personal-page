import React, { useContext } from "react";
import Switch from "react-switch";
import {
  SidebarHolder,
  InfoHolder,
  Contact,
} from "../../components/Sidebar/styles";

import { ThemeContext } from "styled-components";

import { darkThemeIcon, lightThemeIcon } from "../../styles/themes/icons";

const image = require("../../images/profile.png");
const email = require("../../images/email.svg");
const linkedin = require("../../images/linkedin.svg");
const github = require("../../images/github.svg");
const facebook = require("../../images/facebook.svg");

const Sidebar = ({ handleToggleTheme }: any) => {
  const { name } = useContext(ThemeContext);

  return (
    <SidebarHolder>
      <InfoHolder>
        <img src={image} alt="profile" />
        <h2>André Sampaio</h2>
        <p>Software and Firmware Developer</p>
      </InfoHolder>
      <span>TECHNOLOGIES</span>
      <span>ABOUT</span>
      <span>TIMELINE</span>
      <div style={{ marginTop: "auto" }}>
        {/* 
        //@ts-ignore */}
        <Switch
          className="SwitchTheme"
          checked={name === "dark"}
          onChange={handleToggleTheme}
          checkedIcon={darkThemeIcon}
          uncheckedIcon={lightThemeIcon}
          onColor="#50FA7B"
        />
      </div>
      <p>GET IN TOUCH</p>
      <Contact>
        <a href="mailto:andre03.sampaio@gmail.com">
          <img src={email} alt="email" />
        </a>
        <a
          href="https://www.linkedin.com/in/andr%C3%A9-sampaio/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
        <a
          href="https://github.com/apsampaio"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={github} alt="github" />
        </a>
        <a
          href="https://www.facebook.com/Earlsnotmyname"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={facebook} alt="facebook" />
        </a>
      </Contact>
    </SidebarHolder>
  );
};

export default Sidebar;
