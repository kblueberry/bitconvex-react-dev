import { Group, Stack } from "@mantine/core";

import classes from "./TradeContent.module.css";
// import { Coins } from "./components/Coins/Coins";
import { MarketStats } from "./components/MarketStats/MarketStats";
import { MarketTrades } from "./components/MarketTrades/MarketTrades";
import { OrderBook } from "./components/OrderBook/OrderBook";
import { Payment } from "./components/Payment/Payment";
import { TradeChart } from "./components/TradeChart/TradeChart";
import { TradeHistory } from "./components/TradeHistory/TradeHistory";

export const TradeContent = () => {
  return (
    <Stack gap={20} py={64}>
      <Group gap={20} align="stretch" h={1134} wrap="nowrap">
        <Stack gap={20} w={345}>
          <OrderBook />
        </Stack>
        <Stack style={{ flex: 1 }} gap={20}>
          <TradeChart />
          <MarketStats />
        </Stack>
        <Stack gap={20} w={345} className={classes.wrapper}>
          <Payment />
          <MarketTrades />
        </Stack>
      </Group>
      <TradeHistory />
    </Stack>
  );
};
