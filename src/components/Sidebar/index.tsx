import React, { useContext } from "react";
import Switch from "react-switch";
import {
  SidebarHolder,
  InfoHolder,
  Contact,
} from "../../components/Sidebar/styles";

import { ThemeContext } from "styled-components";

import { darkThemeIcon, lightThemeIcon } from "../../styles/themes/icons";

import profile from "../../assets/profile.png";

import { ReactComponent as EmailIcon } from "../../assets/email.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/linkedin.svg";
import { ReactComponent as GithubIcon } from "../../assets/github.svg";
import { ReactComponent as FacebookIcon } from "../../assets/facebook.svg";

const Sidebar = ({ handleToggleTheme }: any) => {
  const { name } = useContext(ThemeContext);

  return (
    <SidebarHolder>
      <InfoHolder>
        <img src={profile} alt="profile" />
        <h2>Andre Sampaio</h2>
        <p>Software and Firmware Developer</p>
      </InfoHolder>

      <div style={{ marginTop: "auto" }}>
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
          <EmailIcon fill="white" />
        </a>
        <a
          href="https://www.linkedin.com/in/andr%C3%A9-sampaio/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <LinkedinIcon fill="white" />
        </a>
        <a
          href="https://github.com/apsampaio"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GithubIcon fill="white" />
        </a>
        {/* <a
          href="https://www.facebook.com/Earlsnotmyname"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FacebookIcon fill="white" />
        </a> */}
      </Contact>
    </SidebarHolder>
  );
};

export default Sidebar;
