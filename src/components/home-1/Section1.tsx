import CarouselCard1 from "@component/carousel-cards/CarouselCard1";
import Carousel from "@component/carousel/Carousel";
import { Box, Container } from "@material-ui/core";
import React, { FC, Fragment } from "react";

const Section1: FC = () => {
  return (
    <Fragment>
      <Box bgcolor="#0098CE" mb={7.5}>
        <Container>
          <Carousel
            totalSlides={2}
            visibleSlides={1}
            infinite={true}
            autoPlay={false}
            showDots={true}
            showArrow={false}
          >
            <CarouselCard1 />
            <CarouselCard1 />
          </Carousel>
        </Container>
      </Box>
    </Fragment>
  );
};

export default Section1;
