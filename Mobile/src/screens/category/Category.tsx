import { useState } from "react";
import { Box, HStack, ScrollView, Button } from "@gluestack-ui/themed";
import { StyleSheet, View } from "react-native";
import Search from "../../components/Search";
import { Text } from "@gluestack-ui/themed";
import datas from "./mocks/data.json";
import CardItems from "../../components/CardItems";
import FilterModal from "./components/filterModal";

export default function CategoryScreen({ navigation }: any) {
  const [page, setPage] = useState(1);
  const [loadedItems, setLoadedItems] = useState(6);

  const handleLoadMore = () => {
    setPage(page + 1);
    setLoadedItems(loadedItems + 6);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        margin: 10,
        marginTop: 40,
        gap: 10,
        padding: 10,
      }}
    >
      <Search />

      <HStack w={"100%"} alignItems="center" justifyContent="space-between">
        <Text fontWeight="bold" fontSize={24}>
          New Arrival
        </Text>

        <FilterModal />
      </HStack>

      <ScrollView
        style={{ flex: 1, marginBottom: 65, marginTop: 10 }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {datas.slice(0, loadedItems).map((item, index) => {
            return (
              <Box key={index} w="50%" h={330}>
                <CardItems data={item} />
              </Box>
            );
          })}
        </View>
        {loadedItems < datas.length && (
          <Button mb={20} bgColor="black" rounded={20} onPress={handleLoadMore}>
            <Text color="$white" fontWeight="bold">
              Load More
            </Text>
          </Button>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
