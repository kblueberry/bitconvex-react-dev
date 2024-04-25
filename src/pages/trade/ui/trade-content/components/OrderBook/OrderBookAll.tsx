import { Stack, Text } from "@mantine/core";
import clsx from "clsx";

import { Container } from "../Container/Container";
import classes from "./OrderBook.module.css";
import { OrderRows } from "./OrderBook.types";
import { StocksTable } from "./StocksTable/StocksTable";

export const OrderBookAll = ({ header, rows }: { header: Array<string>; rows: OrderRows }) => {
  return (
    <Stack>
      <Container>
        <div className={clsx(classes.flexSpaceBetween, classes.columnDirected)}>
          <StocksTable header={header} rows={rows} isPositive={true} />
          <Text className={classes.tradeOrderBookInfo}>38,555.19</Text>
          <StocksTable header={header} rows={rows} isPositive={false} />
        </div>
      </Container>
    </Stack>
  );
};
