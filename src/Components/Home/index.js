import React from "react";
import { NewArrivals } from "./New Arrivals";
import { Content, Wrapper } from "./styled";
import Icon from "./icon";
import Arrivals from "./Arrivals";
import { Newshop } from "./New wop";
import Watches from "./Watches";
import Shoes from "./Shoes";
export default function Home() {
  return (
    <>
      <Content>
        <NewArrivals />
      </Content>
      <Wrapper>
        <Icon />
        <Arrivals />
        <Newshop/>
      </Wrapper>
      <Watches/>
      <Shoes/>
    </>
  );
}
