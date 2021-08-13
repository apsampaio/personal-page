import React from "react";

import {
  Container,
  VideoContainer,
  Background,
  Content,
  Name,
  Skill,
  Greeting,
  About,
  ContactButton,
} from "./styles";

import Video from "../../assets/video.mp4";

const Landing: React.FC = () => {
  return (
    <Container>
      <VideoContainer>
        <Background autoPlay loop muted src={Video} />
      </VideoContainer>
      <Content>
        <Name>Andre Sampaio</Name>
        <Skill>SOFTWARE DEVELOPER</Skill>
        <Greeting>I simply code for enthusiasm</Greeting>
        <ContactButton>Say Hello</ContactButton>
        <About to="/about">About Me</About>
      </Content>
    </Container>
  );
};

export { Landing };
