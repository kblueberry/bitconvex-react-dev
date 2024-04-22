import { Image } from "@mantine/core";

import { Container, Footer, Header, Wrapper } from "@/shared/ui";

import classes from "./styles.module.css";
import { P2PContent } from "./ui";

export function Page() {
  return (
    <Wrapper>
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/main/1.png`} alt="main-light-1" className={classes.lightOne} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/my-profile/2.png`} alt="main-light-2" className={classes.lightTwo} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/my-profile/3.png`} alt="main-light-3" className={classes.lightThree} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/my-profile/1.png`} alt="light-3" className={classes.lightFour} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/shape.png`} alt="light-3" className={classes.shape} />

      <Header />
      <Container>
        <P2PContent />
      </Container>
      <Footer />
    </Wrapper>
  );
}
