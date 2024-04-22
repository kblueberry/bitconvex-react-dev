import { Image } from "@mantine/core";

import { Container, Footer, Header, Sidebar, Wrapper } from "@/shared/ui";
import "react-circular-progressbar/dist/styles.css";

import classes from "./styles.module.css";
import { TransactionTable } from "@/pages/transactions/ui";


export function Page() {
  return (
    <Wrapper>

      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/main/1.png`} alt="main-light-1"
             className={classes.lightOne} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/my-profile/2.png`} alt="main-light-2"
             className={classes.lightTwo} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/my-profile/3.png`} alt="main-light-3"
             className={classes.lightThree} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/my-profile/1.png`} alt="light-3" className={classes.lightFour}/>

      <Header />
      <Container>
        <Sidebar>
             <TransactionTable/>
        </Sidebar>
      </Container>
      <Footer />
    </Wrapper>
  );
}
