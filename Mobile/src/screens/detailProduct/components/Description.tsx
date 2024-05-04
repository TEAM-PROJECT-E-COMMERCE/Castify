import { HStack } from "@gluestack-ui/themed";
import { Divider } from "@gluestack-ui/themed";
import { Box, Text } from "@gluestack-ui/themed";
import { StarRatingDisplay } from "react-native-star-rating-widget";

export default function Description(data: any) {
  const { desc, price, rating, name } = data.data;

  return (
    <>
      <Text fontWeight="bold" fontSize={30} textTransform="uppercase">
        {name}
      </Text>

      <HStack alignItems="center" ml={-5}>
        <StarRatingDisplay starSize={28} rating={rating} />
        <Text fontSize={18}>{rating}/5</Text>
      </HStack>
      <Text fontSize={22} fontWeight="bold" py={10}>
        Rp.{price}
      </Text>

      <Divider />
      <Text pt={10}>{desc}</Text>
    </>
  );
}
