import "react-circular-progressbar/dist/styles.css";

import { Container, Footer, Header, Wrapper } from "@/shared/ui";

import containerClasses from "../../shared/ui/container/styles.module.css";
import { TradeContent } from "./ui";

export function Page() {
  return (
    <Wrapper>
      {/* TODO figure out why these icons needed */}
      {/* <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/main/1.png`} alt="main-light-1" className={classes.lightOne} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/my-profile/2.png`} alt="main-light-2" className={classes.lightTwo} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/my-profile/3.png`} alt="main-light-3" className={classes.lightThree} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/my-profile/1.png`} alt="light-3" className={classes.lightFour} /> */}

      <Header />
      <Container width={1460} className={containerClasses.highOverlayPriority}>
        <TradeContent />
      </Container>
      <Footer width={1460} />
    </Wrapper>
  );
}
