import { Box, HStack, ScrollView, Text } from "@gluestack-ui/themed";
import { Button } from "react-native-paper";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import AddButtonReview from "./AddReviewModal";
import { View } from "react-native";
import TextWithLoadMore from "./TextWithLoadmore";

export default function Review(data: any) {
  // console.log(data.data);
  const reviews = data.data;
  // console.log(name);

  return (
    <Box mt={40}>
      <HStack justifyContent="space-between" alignItems="center">
        <HStack alignItems="center" gap={5}>
          <Text fontWeight="bold" fontSize={24}>
            All Reviews
          </Text>
          <Text>({reviews.length})</Text>
        </HStack>

        <AddButtonReview />
      </HStack>

      <Box gap={15} mt={20}>
        {reviews.map((item: any, index: number) => (
          <Box
            key={index}
            borderWidth={1}
            borderColor="#000"
            rounded={10}
            padding={10}
            gap={5}
          >
            <HStack display="flex" alignItems="center" ml={-5}>
              <StarRatingDisplay starSize={23} rating={item.rating} />
              <Text>{item.rating}/5</Text>
            </HStack>

            <Text fontWeight="bold" fontSize={18}>
              {item.name}
            </Text>

            <TextWithLoadMore text={item.message} maxLength={200} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
