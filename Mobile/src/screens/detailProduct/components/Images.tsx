import { HStack, Link } from "@gluestack-ui/themed";
import { Text } from "@gluestack-ui/themed";
import { Image } from "@gluestack-ui/themed";
import { Box } from "@gluestack-ui/themed";
import { useState } from "react";

export default function Images(data: any) {
  const { image } = data.data;

  const [images, setImages] = useState(image[0]);
  return (
    <Box display="flex" alignItems="center">
      <Image
        alt="product"
        w={380}
        h={380}
        rounded={10}
        source={{
          uri: images,
        }}
      />

      <HStack
        width={"100%"}
        reversed={false}
        display="flex"
        justifyContent="space-between"
        marginVertical={15}
      >
        {image.map((item: string, index: number) => {
          return (
            <Link
              key={index}
              rounded={10}
              bg="$blue300"
              onPress={() => setImages(item)}
            >
              <Image
                alt="product"
                width={110}
                height={110}
                rounded={10}
                borderColor={"black"}
                borderWidth={images == item ? 2 : 0}
                source={{
                  uri: item,
                }}
              />
            </Link>
          );
        })}
      </HStack>
    </Box>
  );
}
