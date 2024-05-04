import { Button, HStack, Input, InputField, Text } from "@gluestack-ui/themed";
import { useState } from "react";

export default function AddButton() {
  const [quantity, setQuantity] = useState(1);

  return (
    <HStack w={"100%"} justifyContent="space-between" mt={20}>
      <HStack bgColor="#e0e0e0" rounded={20}>
        <Button
          onPress={() => setQuantity(quantity - 1)}
          disabled={quantity === 1}
          bgColor="#f0f0f00"
        >
          <Text fontSize={25} mt={-2}>
            -
          </Text>
        </Button>
        <Input
          w={50}
          // size="md"
          borderWidth={0}
        >
          <InputField
            textAlign="center"
            // value={quantity.toString()}
            defaultValue={quantity.toString()}
            onChangeText={(text) => {
              const value = parseInt(text, 10);
              if (!isNaN(value)) {
                setQuantity(value);
              } else if (value < 1) {
                setQuantity(1);
              }
            }}
            keyboardType="number-pad"
          />
        </Input>
        <Button bgColor="#f0f0f00" onPress={() => setQuantity(quantity + 1)}>
          <Text>+</Text>
        </Button>
      </HStack>

      <Button w={"52%"} bgColor="#000" rounded={50}>
        <Text color="white" fontWeight="bold">
          Add to Cart
        </Text>
      </Button>
    </HStack>
  );
}
