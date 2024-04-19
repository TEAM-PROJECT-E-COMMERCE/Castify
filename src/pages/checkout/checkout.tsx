import React from "react";
import { Text, Box, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../../components/navbar";
import Footers from "../../components/footers";
import Breadcrums from "./components/breadcrumbs";

const Checkout = () => {
  return (
    <Box>
      <Navbar />
      <Box h='100vh' w={{base: '90%', '2xl': '80%'}} m='auto' pt='75px'>
              <Breadcrums />
              

      </Box>
      <Footers />
    </Box>
  );
};

export default Checkout;
