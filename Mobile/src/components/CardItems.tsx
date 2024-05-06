import { Box, HStack, Image, Text } from "@gluestack-ui/themed";
import React from "react";
import { StarRatingDisplay } from "react-native-star-rating-widget";

export default function CardItems(data: any) {
  console.log(data.data);
  const { name, harga, rating, image } = data.data;

  return (
    <Box w="$full" h="$full" p={10}>
      <Image w={"100%"} h={200} alt="product" rounded={15} source={image} />
      <Text fontWeight="$semibold" mt={10}>
        {name.length > 40 ? `${name.slice(0, 40)}...` : name}
      </Text>

      <HStack alignItems="center" ml={-5}>
        <StarRatingDisplay starSize={20} rating={rating} />
        <Text>{rating}/5</Text>
      </HStack>

      <Text fontWeight="bold" fontSize={19}>
        {harga}
      </Text>
    </Box>
  );
}
