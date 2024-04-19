<<<<<<< HEAD
import {
  Box,
  Button,
  Card,
  Divider,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
=======
import { Box, Button, Card, Divider, Flex, Heading, Text } from "@chakra-ui/react";
>>>>>>> e0a0976607633ea257773a408664ae0eb0f31bd5
import ListBrands from "./components/ListBrands";
import CardProduct from "./components/newArivalscomp/CardProduct";
import CardBestSeller from "./components/bestSellers/CardBestSeller";
import Navbar from "../../components/navbar";
<<<<<<< HEAD
import BoxCategory from "./components/boxCategory/BoxCategory";
=======
>>>>>>> e0a0976607633ea257773a408664ae0eb0f31bd5

const Home = () => {
  return (
    <>
      <Navbar />
      <Box
        backgroundImage="url('https://i.ibb.co/WzftFqL/bghome-transformed.jpg')"
        backgroundSize="cover"
        backgroundPosition="top"
        backgroundRepeat="no-repeat"
        p={10}
        py={20}
      >
        <Card w={"50%"} p={8} rounded={"2xl"}>
          <Heading mb={4} fontFamily={"abril"} pt={5} w={"50%"}>
            FIND A CAR THAT SUITS YOUR STYLE
          </Heading>
          <Text w={"90%"} mb={4}>
            Explore the wide range of cars we have available, provided with high
            quality that will highlight your individuality and satisfy your
            sense of style.
          </Text>
          <Button
            mb={12}
            w={"30%"}
            bg={"black"}
            color={"white"}
            _hover={{ bg: "gray.200", color: "black" }}
            rounded={"full"}
          >
            Shop Now
          </Button>
          <Flex justifyContent={"center"} mb={4}>
            <Flex flexDirection={"column"} mr={10}>
              <Heading fontWeight={"bold"} fontSize={"xxx-large"}>
                1+
              </Heading>
              <Text fontSize={15} textAlign={"center"} color={"gray.500"}>
                International Brands
              </Text>
            </Flex>
            <Flex flexDirection={"column"} mr={10}>
              <Heading fontWeight={"bold"} fontSize={"xxx-large"}>
                2.000+
              </Heading>
              <Text fontSize={15} textAlign={"center"} color={"gray.500"}>
                Cars Available
              </Text>
            </Flex>
            <Flex flexDirection={"column"} mr={10}>
              <Heading fontWeight={"bold"} fontSize={"xxx-large"}>
                90.000+
              </Heading>
              <Text fontSize={15} textAlign={"center"} color={"gray.500"}>
                Happy Customers
              </Text>
            </Flex>
          </Flex>
        </Card>
      </Box>
      <ListBrands />
      <CardProduct />
      <Box border={"1px solid gray"} mb={10} />
      <CardBestSeller />
      <Box p={4} px={16} >
        <BoxCategory />
      </Box>
    </>
  );
};

export default Home;
