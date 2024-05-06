import { useRef } from "react";
import { Text, Box } from "@gluestack-ui/themed";
import CardItems from "../../../components/CardItems";
import { Dimensions, FlatList, View } from "react-native";
import data from "../mocks/dataRecommendation.json";

export default function Recommendation() {
  return (
    <Box>
      <Text
        textAlign="center"
        textTransform="uppercase"
        fontWeight="bold"
        fontSize={30}
        mt={50}
      >
        You might also like
      </Text>

      <FlatList
        data={data}
        horizontal
        style={{ marginTop: 20 }}
        renderItem={({ item }) => (
          <View
            style={{
              width: 220,
              minHeight: 280,
              maxHeight: 300,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardItems data={item} />
          </View>
        )}
      />
    </Box>
  );
}