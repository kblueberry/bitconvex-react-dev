import { Container, Footer, Header, Wrapper } from "@/shared/ui";
import { Image } from "@mantine/core";
import classes from "./styles.module.css";
import { SwapBox, SwapTitle } from "@/pages/finance/ui";

export function Page() {
  return (
      <Wrapper >
        <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/crypto-market-cap/1.png`} alt="light-1" className={classes.lightOne}/>
        <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/crypto-market-cap/2.png`} alt="light-2" className={classes.lightTwo}/>
        <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/crypto-market-cap/5.png`} alt="light-3" className={classes.lightThree}/>
        <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/privacy-notice/3.png`} alt="light-4" className={classes.lightFour}/>
        <Container>
          <Header />
          <SwapTitle />
          <SwapBox />
        </Container>
        <Footer />
      </Wrapper>
  );
}
