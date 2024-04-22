import { Flex, rem, Stack, Text } from "@mantine/core";
import { CircleIcon, DollarIcon, FireIcon } from "@/pages/finance/ui";
import classes from "./styles.module.css";

export const SwapTitle = () => {
    return (
      <Stack gap={rem("16px")} mt={rem(160)} align="center">
        <Text c={'white'} fz={54} lh={'64px'} fw={600}>
          Fast swap
        </Text>
        <Flex
          gap={rem('32px')}
        >
          <Flex gap={rem(8)}>
            <FireIcon/>
            <Text c={'white'} className={classes.textIcon}>
              Zero fees
            </Text>
          </Flex>
          <Flex gap={rem(8)}>
            <DollarIcon/>
            <Text c={'white'} className={classes.textIcon}>
              Guaranteed price
            </Text>
          </Flex>
          <Flex gap={rem(8)}>
            <CircleIcon/>
            <Text c={'white'} className={classes.textIcon}>
              Any pairs
            </Text>
          </Flex>
        </Flex>
      </Stack>
    );
};

