import { Group, Stack } from "@mantine/core";
import { useEffect, useState } from "react";

import classes from "./TradeContent.module.css";
import { ButtonTabs } from "./components/ButtonTabs/ui";
// import { Coins } from "./components/Coins/Coins";
import { MarketStats } from "./components/MarketStats/MarketStats";
import { MarketTrades } from "./components/MarketTrades/MarketTrades";
import { OrderBook } from "./components/OrderBook/OrderBook";
import { OrderBookMobile } from "./components/OrderBook/OrderBookMobile";
import { StocksTable } from "./components/OrderBook/StocksTable/StocksTable";
import { Payment } from "./components/Payment/Payment";
import { TradeChart } from "./components/TradeChart/TradeChart";
import { TradeHistory } from "./components/TradeHistory/TradeHistory";

export const TradeContent = () => {
  const categories = ["Chart", "Trade"];

  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>(categories[0]);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    window.innerWidth < 600 ? setIsMobile(true) : setIsMobile(false);
  }, [isMobile]);

  return (
    <Stack gap={20} py={64}>
      {isMobile ? (
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
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Payment />
                <OrderBookMobile activeTab="Trade" activeCategory="All" />
              </div>
              <TradeHistory />
            </>
          )}
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
