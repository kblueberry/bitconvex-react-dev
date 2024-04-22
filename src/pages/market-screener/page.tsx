import {
  Box,
  Button,
  Divider,
  Flex,
  Group,
  Pagination,
  Stack,
  Text,
  Title,
  UnstyledButton,
  rem,
  Image,
} from "@mantine/core";
import { Container, Footer, Header, NextIcon, PreviousIcon, ShowRowsCount, Wrapper } from "@/shared/ui";
import classes from "./styles.module.css";
import { CoinsTable } from "./ui/coins-table/ui";

export function Page() {
  return (
    <Wrapper>

      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/market-screener/1.png`} alt="light-1" className={classes.lightOne}/>
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/market-screener/2.png`} alt="light-2" className={classes.lightTwo}/>
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/market-screener/3.png`} alt="light-3" className={classes.lightThree}/>

      <Header />
      <Stack className={classes.contentWrapper}>
      <Container>
        <Stack gap={rem("32px")}>

          <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/market-screener/4.png`} alt="light-4" className={classes.lightFour}/>
          <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/market-screener/5.png`} alt="light-5" className={classes.lightFive}/>
          <Stack gap={rem("32px")}>
            <Group>
              <Flex justify="center" align="center" className={classes.iconWrapper}>
                <img draggable="false" src={`${import.meta.env.BASE_URL}assets/market-screener-icon.png`} alt="market-screener" />
              </Flex>
              <Title c="white" order={2} fz={54}>
                Market Screener
              </Title>
            </Group>

            <Text c="grey" variant="text-2">
              Market screener on cryptocurrency exchanges is a tool that allows users to filter and sort through a wide range of cryptocurrency <br />
              trading pairs based on specific criteria, such as trading volume, price changes, market capitalization, or other metrics.
            </Text>
          </Stack>
          <Stack gap={'clamp(12px, 1vw, 1rem)'} className={classes.ratesTableWrapper}>
            <Group justify={"flex-start"}>
              <Button size="xl" variant="outline" className={classes.ratesButtonRootActive} classNames={{ root: classes.ratesButtonRoot, label: classes.ratesButtonLabel }}>
                General
              </Button>
              <Button size="xl" variant="outline" classNames={{ root: classes.ratesButtonRoot, label: classes.ratesButtonLabel }}>
                Top gainers
              </Button>
              <Button size="xl" variant="outline" classNames={{ root: classes.ratesButtonRoot, label: classes.ratesButtonLabel }}>
                All-time high
              </Button>
              <Button size="xl" variant="outline" classNames={{ root: classes.ratesButtonRoot, label: classes.ratesButtonLabel }}>
                All-time low
              </Button>
              <Button size="xl" variant="outline" classNames={{ root: classes.ratesButtonRoot, label: classes.ratesButtonLabel }}>
                New monthly high
              </Button>
              <Button size="xl" variant="outline" classNames={{ root: classes.ratesButtonRoot, label: classes.ratesButtonLabel }}>
                Most volatile
              </Button>
            </Group>

            <Stack gap={0}>
              <Divider size="xs" classNames={{ root: classes.ratesDividerRoot }} />
              <Group justify={"space-between"}>
                <Group gap={rem(32)} className={classes.categoriesWrapper}>
                  <Box data-active className={classes.categoryButtonWrapper}>
                    <UnstyledButton classNames={{ root: classes.categoryButton }}>Overview</UnstyledButton>
                  </Box>

                  <Box className={classes.categoryButtonWrapper}>
                    <UnstyledButton classNames={{ root: classes.categoryButton }}>Performance</UnstyledButton>
                  </Box>

                  <Box className={classes.categoryButtonWrapper}>
                    <UnstyledButton classNames={{ root: classes.categoryButton }}>Oscillators</UnstyledButton>
                  </Box>

                  <Box className={classes.categoryButtonWrapper}>
                    <UnstyledButton classNames={{ root: classes.categoryButton }}>Trend-Following</UnstyledButton>
                  </Box>
                </Group>
                <ShowRowsCount />
              </Group>
              <Divider size="xs" classNames={{ root: classes.ratesDividerRoot }} />
              <CoinsTable />
            </Stack>

            <Divider size="xs" classNames={{ root: classes.ratesDividerRoot }} />

            <Group justify={"space-between"}>
              <Text variant="text-4" className={classes.greyText}>
                1-20 of 9,383 assets
              </Text>
              <Pagination total={20} defaultValue={1}>
                <Group gap={rem("8px")} justify="center">
                  <Pagination.Previous icon={PreviousIcon} />
                  <Pagination.Items />
                  <Pagination.Next icon={NextIcon} />
                </Group>
              </Pagination>
            </Group>
          </Stack>

        </Stack>
      </Container>

      </Stack>

      <Footer />

    </Wrapper>
  );
}
