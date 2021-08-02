import React from "react";

import {
  Container,
  VideoContainer,
  Background,
  Content,
  Skill,
  Greeting,
  Buttons,
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
        <Skill>SOFTWARE DEVELOPER</Skill>
        <Greeting>I find solutions and write some code.</Greeting>
        <ContactButton>Say Hello</ContactButton>
        <About>About Me</About>
      </Content>
    </Container>
  );
};

export { Landing };
