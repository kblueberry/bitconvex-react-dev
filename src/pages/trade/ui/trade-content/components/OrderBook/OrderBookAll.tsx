import { Stack, Text } from "@mantine/core";
import clsx from "clsx";

import { Container } from "../Container/Container";
import containerClasses from "../Container/Container.module.css";
import { rowsMobile } from "./OrderBook.constants";
import classes from "./OrderBook.module.css";
import { Stocks } from "./Stocks/Stocks";

export const OrderBookAll = ({ header }: { header: Array<string> }) => {
  console.log("rows mobile", rowsMobile);

  return (
    <Stack className={containerClasses.ordersAll}>
      <Container>
        <div className={clsx(classes.flexSpaceBetween, classes.columnDirected)}>
          <Stocks header={header} rows={[...rowsMobile].slice(0, 4)} isPositive={true} cellsOrderChanged={false} />
          <Text className={classes.tradeOrderBookInfo}>38,555.19</Text>
          <Stocks header={header} rows={[...rowsMobile].slice(0, 4)} isPositive={false} cellsOrderChanged={true} />
        </div>
      </Container>
    </Stack>
  );
};
