import { AddIcon } from "@gluestack-ui/themed";
import { Button, ButtonIcon, ButtonText } from "@gluestack-ui/themed";
import { Text, View } from "react-native";

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 10 }}>
      <Text>Home Screen</Text>

      <Button
        size="md"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
        onPress={() => navigation.navigate("Categories")}
      >
        <ButtonText>Go to category </ButtonText>
      </Button>
      <Button
        size="md"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
        onPress={() => navigation.navigate("Details")}
      >
        <ButtonText>Go to details </ButtonText>
      </Button>
    </View>
  );
}
