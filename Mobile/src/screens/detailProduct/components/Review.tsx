import React, { useState } from "react";
import { Box, HStack, ScrollView, Text, Button } from "@gluestack-ui/themed";
// import { Button } from "react-native-paper";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import AddButtonReview from "./AddReviewModal";
import { View } from "react-native";
import TextWithLoadMore from "./TextWithLoadmore";

export default function Review(data: any) {
  const reviews = data.data;
  const [visibleReviews, setVisibleReviews] = useState(3); // Show 3 reviews initially

  const loadMoreReviews = () => {
    // Increase visible reviews by 3 on each click
    setVisibleReviews(visibleReviews + 3);
  };

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

      <ScrollView>
        <Box gap={15} mt={20}>
          {reviews.slice(0, visibleReviews).map((item: any, index: number) => (
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
      </ScrollView>

      {visibleReviews < reviews.length && (
        <Button
          bgColor="black"
          rounded={"$full"}
          mt={20}
          onPress={loadMoreReviews}
        >
          <Text color="$white" fontWeight="bold">
            Load more reviews
          </Text>
        </Button>
      )}
    </Box>
  );
}
