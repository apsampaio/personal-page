import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import omni from "./omni";

const Code: React.FC = ({ children }) => {
  return (
    <SyntaxHighlighter
      language="json"
      style={omni}
      showLineNumbers
      customStyle={{
        maxWidth: "350px",
        maxHeight: "540px",
        width: "350px",
        height: "540px",
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export { Code };
