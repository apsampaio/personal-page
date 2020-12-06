import React from "react";

import { Container, Icon, Title } from "./styles";

export interface CardProps {
  title: string;
  path: string;
  color: string;
}

const Card: React.FC<CardProps> = ({ color, path, title }) => {
  return (
    <Container color={color}>
      <Icon src={path} alt={title} />
      <Title>{title}</Title>
    </Container>
  );
};

export default Card;
