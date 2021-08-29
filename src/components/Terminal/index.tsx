import React from "react";

import { TerminalContainer, TerminalHeader, TerminalBody } from "./styles";
import { Code } from "../Code";

type TerminalProps = {
  image: string;
  title: string;
  subtitle: string;
  code: string;
};

const Terminal: React.FC<TerminalProps> = ({
  image,
  title,
  subtitle,
  code,
}) => {
  return (
    <TerminalContainer>
      <TerminalHeader>
        <span />
        <span />
        <span />
      </TerminalHeader>
      <TerminalBody>
        <img src={image} alt="monitor-shimmer" color="#fff" />
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <Code>{code}</Code>
      </TerminalBody>
    </TerminalContainer>
  );
};

export { Terminal };
