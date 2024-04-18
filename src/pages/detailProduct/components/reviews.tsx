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
} from "@chakra-ui/react";
import ReviewsCard from "./reviewsCard";
import datas from "../mocks/data.json";

const Reviews = () => {
  return (
    <Box mt='16'>
      <Flex gap={3} alignItems='end'>
        <Text fontWeight="bold" fontSize="2xl">
          All Reviews
        </Text>
        <Text fontSize='xl'>({datas[0].reviews.length})</Text>
      </Flex>

      {datas[0].reviews.map((review, index) => {
        return <ReviewsCard key={index} review={review} />;
      })}
    </Box>
  );
};

export default Reviews;
