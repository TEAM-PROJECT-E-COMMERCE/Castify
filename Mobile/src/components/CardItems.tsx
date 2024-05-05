import { Box, HStack, Image, Text } from "@gluestack-ui/themed";
import React from "react";
import { StarRatingDisplay } from "react-native-star-rating-widget";

export default function CardItems() {
  return (
    <Box w="$full" h="$full">
      <Image
        w={"90%"}
        h={200}
        alt="product"
        rounded={15}
        source={
          "https://img.lazcdn.com/g/p/c5bd16b11ba20d0e0bf8716f948da63c.png_720x720q80.png"
        }
      />
      <Text fontWeight="$semibold">Polo with Contrast Trims</Text>

      <HStack alignItems="center" ml={-5}>
        <StarRatingDisplay starSize={20} rating={4} />
        <Text>{4}/5</Text>
      </HStack>

      <Text fontWeight="bold" mt={5} fontSize={19}>
        Rp. 20000
      </Text>
    </Box>
  );
}
