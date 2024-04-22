import { Group, Stack } from "@mantine/core";

// import classes from "./TradeContent.module.css";
// import { Coins } from "./components/Coins/Coins";
import { MarketStats } from "./components/MarketStats/MarketStats";
import { MarketTrades } from "./components/MarketTrades/MarketTrades";
import { OrderBook } from "./components/OrderBook/OrderBook";
import { Payment } from "./components/Payment/Payment";
import { TradeChart } from "./components/TradeChart/TradeChart";
import { TradeHistory } from "./components/TradeHistory/TradeHistory";

export const TradeContent = () => (
  <Stack gap={20} py={64}>
    <Group gap={20} mah={1077} wrap="nowrap" align="stretch">
      <Stack gap={20} w={345}>
        <OrderBook />
        <MarketTrades />
      </Stack>
      <Stack style={{ flex: 1 }} gap={20}>
        <TradeChart />
        <MarketStats />
      </Stack>
      <Payment />

    </Group>
    <TradeHistory />
  </Stack>
);
