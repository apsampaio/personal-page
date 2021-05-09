import React, { useEffect, useRef } from "react";
import { Main, Container } from "./styles";

const Home: React.FC = () => {
  const mainRef = useRef(null);

  const handleWheel = (ev) => {
    console.log("❗ Evento de Roda");
    if (ev.deltaY > 0) {
      scrollWindowY(window.innerHeight, 600);
    } else {
      scrollWindowY(-window.innerHeight, 600);
    }
  };

  function scrollWindowY(to: number, duration: number) {
    if (duration <= 0) {
      return;
    }

    let difference = to - window.pageYOffset;
    let perTick = (difference / duration) * 10;

    setTimeout(function () {
      window.scrollTo(0, window.pageYOffset + perTick);
      if (window.scrollY === to) return;
      scrollWindowY(to, duration - 10);
    }, 10);
  }

  return (
    <Main ref={mainRef} onWheel={handleWheel}>
      <section
        className="section"
        style={{
          backgroundColor: "dodgerblue",
          width: "100vw",
          height: "100vh",
        }}
      ></section>
      <Container className="section"></Container>
    </Main>
  );
};

export default Home;
