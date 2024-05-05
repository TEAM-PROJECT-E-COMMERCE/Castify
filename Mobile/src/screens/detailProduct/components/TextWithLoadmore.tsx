import { Link, Text } from "@gluestack-ui/themed";
import React, { useState } from "react";
import { View } from "react-native";

interface Loadmore {
  text: string;
  maxLength: number;
}

const TextWithLoadMore = ({ text, maxLength }: Loadmore) => {
  const [showFullText, setShowFullText] = useState(false);

  return (
    <View>
      <Text>{showFullText ? text : `${text.slice(0, maxLength)}...`}</Text>
      {!showFullText && text.length > maxLength && (
        <Link onPress={() => setShowFullText(!showFullText)}>
          <Text textDecorationLine="underline">
            Loadmore
          </Text>
        </Link>
      )}
    </View>
  );
};

export default TextWithLoadMore;
