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
import { FaXTwitter } from "react-icons/fa6";

const Footers = () => {
  return (
    <Box bg="red.500">
      <Box w="80%" m="auto" bg="black" textAlign="center" rounded="20px">
        <Text color="white" fontWeight="bold" fontSize="4xl" w="40%" m="auto">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </Text>
      </Box>

      <Box bg="#F0F0F0" pt="20">
        <Grid templateColumns="repeat(5, 1fr)" gap={6} mx="10">
          <GridItem
            w="100%"
            h="10"
            display="flex"
            flexDirection="column"
            gap="10"
            py="5"
          >
            <Text fontWeight="bold" fontSize="3xl">
              AutoLux
            </Text>

            <Text>
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </Text>

            <Flex gap="3">
              <Button
                p="2"
                rounded="full"
                border="2px solid gray"
                transition="all ease-in-out 0.3s"
                _hover={{
                  bg: "black",
                  color: "white",
                  border: "2px solid black",
                }}
              >
                <FaXTwitter />
              </Button>
              <Button
                bg="white"
                p="2"
                rounded="full"
                border="2px solid gray"
                transition="all ease-in-out 0.3s"
                _hover={{
                  bg: "black",
                  color: "white",
                  border: "2px solid black",
                }}
              >
                <FaXTwitter />
              </Button>
              <Button
                bg="white"
                p="2"
                rounded="full"
                border="2px solid gray"
                transition="all ease-in-out 0.3s"
                _hover={{
                  bg: "black",
                  color: "white",
                  border: "2px solid black",
                }}
              >
                <FaXTwitter />
              </Button>
              <Button
                bg="white"
                p="2"
                rounded="full"
                border="2px solid gray"
                transition="all ease-in-out 0.3s"
                _hover={{
                  bg: "black",
                  color: "white",
                  border: "2px solid black",
                }}
              >
                <FaXTwitter />
              </Button>
            </Flex>
          </GridItem>

          <GridItem w="100%" h="10" bg="blue.500"></GridItem>
          <GridItem w="100%" h="10" bg="blue.500"></GridItem>
          <GridItem w="100%" h="10" bg="blue.500"></GridItem>
          <GridItem w="100%" h="10" bg="blue.500"></GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footers;
