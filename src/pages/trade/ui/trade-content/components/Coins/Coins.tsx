import { useResize } from "@/hooks/useResize";
import { Button, CloseButton, Popover, Stack, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import clsx from "clsx";

import { ArrowDown, SearchIcon } from "@/shared/ui";
import { Tabs } from "@/shared/ui/tabs";

import { Container } from "../Container/Container";
import { CoinsTabs } from "./Coins.config";
import classes from "./Coins.module.css";

export const Coins = () => {
  const { isAdaptive } = useResize(1024);
  const [opened, { close, open }] = useDisclosure(false);

  return (
    <Popover keepMounted opened={opened} position="top">
      <Popover.Target>
        <Button bg={"transparent"} px={8} className={classes.target} onClick={open}>
          <ArrowDown />
        </Button>
      </Popover.Target>
      <Popover.Dropdown className={clsx(classes.dropdown, classes.searchPopover)}>
        <div className={classes.coinsContainer}>
          <Container>
            <Stack gap={32} h={"100%"}>
              <div className={classes.searchContainer}>
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
                {isAdaptive && <CloseButton className={classes.closeSearchWndowIcon} onClick={close} />}
              </div>
              <Tabs tabs={CoinsTabs} showTrack={false} indicatorRadius={8} tabControllFontSize={16} />
            </Stack>
          </Container>
        </div>
      </Popover.Dropdown>
    </Popover>
  );
};
