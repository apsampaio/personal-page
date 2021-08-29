import styled from "styled-components";

export const TerminalContainer = styled.div`
  width: 400px;
  height: 800px;

  margin-top: 20px;

  background-color: #22212c;

  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const TerminalHeader = styled.div`
  display: flex;
  align-items: center;

  height: 2rem;

  padding: 0.5rem;

  span {
    width: 12px;
    height: 12px;
    border-radius: 6px;

    margin: 4px;
    background-color: #ffbd2e;
  }

  span:first-of-type {
    background-color: #ff5f56;
  }

  span:last-of-type {
    background-color: #27c93f;
  }
`;

export const TerminalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 1rem 2rem;

  color: #ffffff;

  text-align: center;

  img {
    height: 56px;
    width: 56px;
  }

  h2 {
    margin: 1rem 0;
  }

  p {
    margin: 0.5rem 0;
  }

  pre {
    code span {
      font-family: "JetBrains Mono", monospace !important;
      font-size: 16px !important;
    }

    ::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }
    ::-webkit-scrollbar-thumb {
      background: #44475a;
      border-radius: 0px;
    }
    ::-webkit-scrollbar-track {
      background: #191622;
      border-radius: 0px;
      box-shadow: inset 0px 0px 0px 0px #41414d;
    }
  }
`;
