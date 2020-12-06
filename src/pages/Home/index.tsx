import React from "react";
import { HomeBackground } from "./styles";
import Card from "../../components/Card";
import data from "../../data";

const Home = () => {
  return (
    <HomeBackground>
      {data.map(({ color, path, title }) => (
        <Card title={title} color={color} path={path} key={title} />
      ))}
    </HomeBackground>
  );
};

export default Home;
