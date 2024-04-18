import React from "react";
import {
  Box,
  Text,
  Grid,
  GridItem,
  Flex,
  Button,
  Icon,
} from "@chakra-ui/react";
import Navbar from "../../components/navbar";
import Footers from "../../components/footers";
import Breadcrums from "./components/breadcrums";

const DetailProduct = () => {
  return (
    <>
      <Navbar />

      <Box h="100vh" bg="red">
        <Box w="80%" h="100%" m="auto" bg="gray.200">
                  <Breadcrums />
                  
                  
        </Box>
      </Box>

      <Footers />
    </>
  );
};

export default DetailProduct;
