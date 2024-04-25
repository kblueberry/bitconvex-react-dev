import { Stack, Text } from "@mantine/core";
import clsx from "clsx";

import { Container } from "../Container/Container";
import containerClasses from "../Container/Container.module.css";
import classes from "./OrderBook.module.css";
import { OrderRows } from "./OrderBook.types";
import { Stocks } from "./Stocks/Stocks";

export const OrderBookAll = ({ header, rows }: { header: Array<string>; rows: OrderRows }) => {
  return (
    <Stack className={containerClasses.ordersAll}>
      <Container>
        <div className={clsx(classes.flexSpaceBetween, classes.columnDirected)}>
          <Stocks header={header} rows={rows} isPositive={true} />
          <Text className={classes.tradeOrderBookInfo}>38,555.19</Text>
          <Stocks header={header} rows={rows} isPositive={false} />
        </div>
      </Container>
    </Stack>
  );
};
