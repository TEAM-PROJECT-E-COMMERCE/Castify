import { Box, ScrollView } from "@gluestack-ui/themed";
import { View } from "react-native";
import Search from "../../components/Search";
import datas from "./mocks/data.json";
import Images from "./components/Images";
import Description from "./components/Description";
import AddButton from "./components/AddButton";
import Review from "./components/Review";

export default function DetailProductScreen() {
  // useEffect(() => {
    // console.log(datas[0].reviews);
  // }, []);
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

      <ScrollView
        style={{ flex: 1, marginBottom: 65 }}
        showsVerticalScrollIndicator={false}
      >
        <Images data={datas[0]} />
        <Description data={datas[0]} />
        <AddButton />

        <Review data={datas[0].reviews} />
      </ScrollView>
    </View>
  );
}
