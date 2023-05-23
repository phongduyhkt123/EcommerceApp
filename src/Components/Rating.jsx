import { FontAwesome } from "@expo/vector-icons";
import { HStack, Text } from "native-base";
import React from "react";
import Colors from "../color";

const Rating = ({ value, text }) => {
  return (
    <HStack space={1}>
      <FontAwesome
        name={value >= 1 ? "star" : value >= 0.5 ? "star-half-o" : "star-o"}
        size={8}
        color={Colors.orange}
      />
      <FontAwesome
        name={value >= 2 ? "star" : value >= 1.5 ? "star-half-o" : "star-o"}
        size={8}
        color={Colors.orange}
      />
      <FontAwesome
        name={value >= 3 ? "star" : value >= 2.5 ? "star-half-o" : "star-o"}
        size={8}
        color={Colors.orange}
      />
      <FontAwesome
        name={value >= 4 ? "star" : value >= 3.5 ? "star-half-o" : "star-o"}
        size={8}
        color={Colors.orange}
      />
      <FontAwesome
        name={value >= 5 ? "star" : value >= 4.5 ? "star-half-o" : "star-o"}
        size={8}
        color={Colors.orange}
      />
      <Text fontSize={10} ml={1}>
        {text && text}
      </Text>
    </HStack>
  );
};

export default Rating;
