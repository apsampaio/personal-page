import styled from "styled-components";

export const SidebarHolder = styled.aside`
  display: flex;
  flex-direction: column;
  position: fixed;

  width: 300px;
  height: 100%;

  align-items: center;

  z-index: 10;

  background: ${({ theme }) => theme.colors.sidebar};

  transition: background 1s linear;

  span {
    font-size: 20px;
    font-weight: normal;
    font-style: normal;

    margin-top: 32px;
    color: ${({ theme }) => theme.colors.text};
  }

  span:hover {
    color: ${({ theme }) => theme.colors.selected};
    cursor: pointer;
  }

  p {
    font-weight: 200;
    color: ${({ theme }) => theme.colors.text};
    margin-top: 16px;
    margin-bottom: 16px;
  }
`;

export const InfoHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 72px;

  img {
    width: 208px;
    height: 208px;

    margin-top: 32px;
    border-radius: 50%;
  }

  h2 {
    font-weight: normal;
    font-size: 36px;

    color: ${({ theme }) => theme.colors.text};

    margin-top: 36px;
  }

  p {
    font-size: 24px;
    font-weight: 200;

    color: ${({ theme }) => theme.colors.text};

    margin-top: 16px;
    text-align: center;
  }
`;

export const Contact = styled.div`
  display: flex;
  justify-content: space-evenly;

  width: 224px;

  margin-bottom: 16px;

  img {
    width: 24px;
    height: 24px;

    border: none;

    opacity: 0.3;
    filter: invert();
  }

  img:hover {
    cursor: pointer;
    opacity: 1;
  }
`;
