import React from "react";

import { Container, Header, Logo, ContactButton } from "./styles";

import LogoImage from "../../assets/moai.png";

const About: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo src={LogoImage} alt="moai" />
        <ContactButton>SAY HELLO</ContactButton>
      </Header>
    </Container>
  );
};

export { About };
