import { Group, Stack, Text } from "@mantine/core";

import { Tabs } from "@/shared/ui/tabs";

import { Coins } from "../Coins/Coins";
import { Container } from "../Container/Container";
import containerClasses from "../Container/Container.module.css";
import classes from "../TradeChart/TradeChart.module.css";
import { BuyTab } from "./components/tabs/BuyTab/BuyTab";
import { SellTab } from "./components/tabs/SellTab/SellTab";

const tabs = [
  { id: "buy", title: "Buy", content: <BuyTab /> },
  { id: "sell", title: "Sell", content: <SellTab /> },
];
export const Payment = () => {
  return (
    <Stack>
      <Container className={containerClasses.payment}>
        {window.innerWidth < 600 && (
          <>
            <Group gap={8} className={classes.tradeChartWrapper}>
              <Text className={classes.tradeChartTitle}>Bitcoin/USDT Chart</Text>
              <Coins />
            </Group>
          </>
        )}

        <Group mt={20} mb={32}>
          <Tabs overflowContainer={false} tabs={tabs} />
        </Group>
      </Container>
    </Stack>
  );
};
