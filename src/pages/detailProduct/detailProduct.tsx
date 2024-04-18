import React from "react";
import {
  Box,
  Text,
  Grid,
  GridItem,
  Flex,
  Button,
  Icon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Navbar from "../../components/navbar";
import Footers from "../../components/footers";
import Breadcrums from "./components/breadcrums";
import PreviewImage from "./components/privewImage";
import DetailCard from "./components/detailCard";
import Reviews from "./components/reviews";

const DetailProduct = () => {
  return (
    <>
      <Navbar />

      <Box h="100vh">
        <Box w="80%" h="100%" m="auto">
          <Breadcrums />

          <Grid templateColumns="repeat(2, 1fr)" gap={5} mt="50px">
            <GridItem colSpan={1}>
              <PreviewImage />
            </GridItem>

            <GridItem colSpan={1} pl='5'>
              <DetailCard />
            </GridItem>
          </Grid>

          <Reviews />
        </Box>
      </Box>

      <Footers />
    </>
  );
};

export default DetailProduct;
