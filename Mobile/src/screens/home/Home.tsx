import { AddIcon } from "@gluestack-ui/themed";
// import { Button, ButtonIcon, ButtonText } from "@gluestack-ui/themed";
import { Text, View, Button } from "react-native";

export default function Home({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />

      {/* <Button
        size="md"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
        onPress={() => navigation.navigate("Details")}
      >
        <ButtonText>Go to details </ButtonText>
        <ButtonIcon as={AddIcon} />
      </Button> */}
    </View>
  );
}
