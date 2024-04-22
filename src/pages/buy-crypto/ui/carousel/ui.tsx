import { Box, Flex, rem, Stack } from "@mantine/core";
import classes from "./styles.module.css";
import clsx from "clsx";
import { payments } from "../icons";




export const Carousel = ( ) => {
  const collaboratorsSlides = payments.map((item,index) => (
    <li key={index}>
      {item.icon}
    </li>
  ));
  return (
    <Stack gap={rem('64px')} className={classes.collaboratorsWrapper}>

      <Box className={classes.collaboratorsCarouselWrapper}>
        <div className={classes.scroller} data-animated='true'>
          <Flex gap={'clamp(2rem, 3.75vw, 3.75rem)'} className={clsx(classes.imagesList, classes.scrollerInner)}>
            {collaboratorsSlides}
          </Flex>
        </div>
      </Box>
    </Stack>
  );
};
