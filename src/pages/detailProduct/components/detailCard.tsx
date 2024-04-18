import React from "react";
import {
  Box,
  Text,
  Grid,
  GridItem,
  Flex,
  Button,
  Icon,
  Image,
  Link,
} from "@chakra-ui/react";
import datas from "../mocks/data.json";
import { Rating, Star } from "@smastrom/react-rating";
import ButtonAdd from "./buttonAdd";

const DetailCard = () => {
  const myStyles = {
    itemShapes: Star,
    activeFillColor: "#FFC663",
    inactiveFillColor: "#d3d3d3",
  };

  return (
    <Box display="flex" h="100%" flexDirection="column" gap="3">
      <Text fontWeight="bold" fontSize="4xl">
        {datas[0].name}
      </Text>

      <Flex gap={2}>
        <Rating
          style={{ maxWidth: 115 }}
          value={datas[0].rating}
          readOnly
          itemStyles={myStyles}
        />

        <Text>{datas[0].rating}/5</Text>
      </Flex>

      <Text fontSize="3xl" fontWeight="bold">
        {datas[0].harga}
      </Text>

      <Box h="16vh" overflow="auto">
        <Text>{datas[0].description}</Text>
      </Box>

      <Flex h="30%" flexDirection="column" justifyContent="end" gap="5">
        <Flex gap="5">
          <Flex gap="2">
            <Text fontWeight="bold">Type: </Text>
            <Link>{datas[0].type}</Link>
          </Flex>

          <Flex gap="2">
            <Text fontWeight="bold">Model: </Text>
            <Link>{datas[0].model}</Link>
          </Flex>
        </Flex>

        <Flex>
          <ButtonAdd />

          <Button w='100%' ml='10' bg='black' color='white' rounded='20px' border='2px solid black' boxShadow='lg' _hover={{bg: 'none', color: 'black'}}>Add to Chart</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default DetailCard;
