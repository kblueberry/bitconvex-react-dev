import { Button, Popover, Stack, TextInput } from "@mantine/core";

import { ArrowDown, SearchIcon } from "@/shared/ui";
import { Tabs } from "@/shared/ui/tabs";

import { Container } from "../Container/Container";
import { CoinsTabs } from "./Coins.config";
import classes from "./Coins.module.css";

export const Coins = () => {
  return (
    <Popover keepMounted>
      <Popover.Target>
        <Button bg={"transparent"} px={8} className={classes.target}>
          <ArrowDown />
        </Button>
      </Popover.Target>
      <Popover.Dropdown className={classes.dropdown}>
        <div className={classes.coinsContainer}>
          <Container>
            <Stack gap={32} h={"100%"}>
              <TextInput
                h={51}
                classNames={{
                  input: classes.searchInput,
                  wrapper: classes.searchInputWrapper,
                  section: classes.searchInputSection,
                }}
                leftSection={<SearchIcon />}
                placeholder="Search Coin Name"
              />
              <Tabs tabs={CoinsTabs} showTrack={false} indicatorRadius={8} tabControllFontSize={16} />
            </Stack>
          </Container>
        </div>
      </Popover.Dropdown>
    </Popover>
  );
};
