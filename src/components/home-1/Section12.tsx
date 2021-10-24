import BazarCard from "@component/BazarCard";
import LazyImage from "@component/LazyImage";
import { Container, Grid } from "@material-ui/core";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Link from "next/link";
import React, { FC } from "react";
import { H2, H4, Span } from "../Typography";

const Section12: FC = () => {
  const renderProduct = (product: any, idx: number) => {
    return (
      <Grid item sm={6} xs={12} key={idx}>
        <BazarCard
          sx={{
            p: "1.5rem",
            height: "100%",
            borderRadius: "16px",
          }}
          hoverEffect
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <LazyImage
                src={product.imgUrl}
                width={350}
                height={250}
                layout="responsive"
                objectFit="cover"
                borderRadius="8px"
                // alt={title}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid
                container
                flexDirection="column"
                height="100%"
                justifyContent="space-between"
              >
                <Grid>
                  <H4>{product.title}</H4>
                  <Span color="grey.600">{product.sub}</Span>
                </Grid>

                <Link href="/car-loan">
                  <Grid
                    container
                    alignItems="center"
                    mt={1}
                    style={{ cursor: "pointer" }}
                  >
                    <Span color="#0098CE" mr={2}>
                      Xem chi tiết
                    </Span>
                    <ChevronRight fontSize="small" htmlColor="#0098CE" />
                  </Grid>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </BazarCard>
      </Grid>
    );
  };

  return (
    <Container sx={{ mb: "70px" }}>
      <Grid container justifyContent="center">
        <Grid item md={6} textAlign="center">
          <H2>Sản phẩm của chúng tôi</H2>
          <Span display="block" color="grey.600" my={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. sedut et
            labore et dolore magna aliqua.
          </Span>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" mt={2}>
        <Grid item xs={12}>
          <Grid container spacing={5}>
            {lstProduct.map((product, idx) => renderProduct(product, idx))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

const lstProduct = [
  {
    imgUrl: "/assets/loyalty/home/batdongsan.png",
    title: "Bất động sản",
    sub: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea nisl diam nisl pretium nec",
  },
  {
    imgUrl: "/assets/loyalty/home/tieudung.png",
    title: "Tiêu dùng",
    sub: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea nisl diam nisl pretium nec",
  },
  {
    imgUrl: "/assets/loyalty/home/oto.png",
    title: "Ô tô",
    sub: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea nisl diam nisl pretium nec",
  },
  {
    imgUrl: "/assets/loyalty/home/thetindung.png",
    title: "Thẻ tín dụng",
    sub: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea nisl diam nisl pretium nec",
  },
  {
    imgUrl: "/assets/loyalty/home/xemay.png",
    title: "Xe máy",
    sub: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea nisl diam nisl pretium nec",
  },
  {
    imgUrl: "/assets/loyalty/home/tinchap.png",
    title: "Tín chấp",
    sub: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea nisl diam nisl pretium nec",
  },
];

export default Section12;
