import React from "react";
import { Main, Container } from "./styles";

const Home: React.FC = () => {
  const handleWheel: React.WheelEventHandler<HTMLDivElement> | undefined = (
    ev
  ) => {
    console.log("❗ Evento de Roda");
    if (ev.deltaY > 0) {
      scrollWindowY(window.innerHeight, 600);
    } else {
      scrollWindowY(-window.innerHeight, 600);
    }
  };

  const scrollWindowY = (to: number, duration: number) => {
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
  };

  return (
    <Main onWheel={handleWheel}>
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
