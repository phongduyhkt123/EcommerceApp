import { Box, Center, Text } from "native-base";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import Buttone from "./Buttone";

import Colors from "../color";

const CartEmpty = () => {
  return (
    <Box flex={1} px={8}>
      <Center h="90%">
        <Center w={200} h={200} bg={Colors.white} rounded="full">
          <FontAwesome name="shopping-cart" size={64} color={Colors.main} />
        </Center>
        <Text mt={5} fontSize={24} fontWeight="bold" color={Colors.main}>
          Cart is Empty
        </Text>
      </Center>
      <Buttone color={Colors.white} bg={Colors.black}>
        Go Shopping
      </Buttone>
    </Box>
  );
};

export default CartEmpty;
