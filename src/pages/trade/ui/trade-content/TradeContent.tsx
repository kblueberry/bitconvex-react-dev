import { useResize } from "@/hooks/useResize";
import { Group, Stack } from "@mantine/core";
import { useState } from "react";

import classes from "./TradeContent.module.css";
import { ButtonTabs } from "./components/ButtonTabs/ui";
// import { Coins } from "./components/Coins/Coins";
import { MarketStats } from "./components/MarketStats/MarketStats";
import { MarketTrades } from "./components/MarketTrades/MarketTrades";
import { OrderBook } from "./components/OrderBook/OrderBook";
import { OrderBookMobile } from "./components/OrderBook/OrderBookMobile";
import { Payment } from "./components/Payment/Payment";
import { TradeActions } from "./components/TradeActions";
import { TradeChart } from "./components/TradeChart/TradeChart";
import { TradeHistory } from "./components/TradeHistory/TradeHistory";

export const TradeContent = () => {
  const categories = ["Chart", "Trade"];

  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>(categories[0]);
  const { isAdaptive } = useResize(1024);

  return (
    <Stack gap={20} py={64}>
      {isAdaptive ? (
        <Group>
          <ButtonTabs {...{ categories, activeCategory, setActiveCategory }} />
          {activeCategory === "Chart" && (
            <>
              <TradeChart />
              <MarketStats />
              <OrderBook />
            </>
          )}
          {activeCategory === "Trade" && (
            <>
              <div className={classes.tradeTabContainer}>
                <Payment />
                <OrderBookMobile activeTab="Trade" activeCategory="All" />
              </div>
              <TradeHistory />
            </>
          )}
          {activeCategory === "Chart" && <TradeActions />}
        </Group>
      ) : (
        <>
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
        </>
      )}
    </Stack>
  );
};
