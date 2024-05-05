import { useRef } from "react";
import { Text, Box } from "@gluestack-ui/themed";
import CardItems from "../../../components/CardItems";
import { Dimensions, FlatList, View } from "react-native";

export default function Recommendation() {
  const isCarousel = useRef(null);
  const SLIDER_WIDTH = Dimensions.get("window").width + 80;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
  const data = [
    {
      title: "Aenean leo",
      body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      imgUrl: "https://picsum.photos/id/11/200/300",
    },
    {
      title: "In turpis",
      body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
      imgUrl: "https://picsum.photos/id/10/200/300",
    },
    {
      title: "Lorem Ipsum",
      body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
  ];
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
              style={{marginTop: 20}}
        renderItem={() => (
          <View
            style={{
              width: 220,
              minHeight: 280,
              maxHeight: 300,
              justifyContent: "center",
              alignItems: "center",
              //   backgroundColor: '#000'
            }}
          >
            <CardItems />
          </View>
        )}
      />
    </Box>
  );
}
