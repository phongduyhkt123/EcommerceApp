import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  Pressable,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { SwipeListView } from "react-native-swipe-list-view";
import { FontAwesome } from "@expo/vector-icons";

import products from "../data/products";
import Colors from "../color";
import Buttone from "./Buttone";

const Swiper = () => {
  return (
    <SwipeListView
      rightOpenValue={-50}
      previewRowKey="0"
      previewOpenValue={-40}
      previewOpenDelay={3000}
      data={products.slice(0, 10)}
      renderHiddenItem={renderHiddenItems}
      renderItem={renderItems}
      showsVerticalScrollIndicator={false}
    />
  );
};

const renderItems = (data) => (
  <Pressable>
    <Box ml={6} mb={3}>
      <HStack
        alignItems={"center"}
        bg={Colors.white}
        shadow={1}
        rounded={10}
        overflow="hidden"
      >
        <Center w="25%" bg={Colors.deepGray}>
          <Image
            source={{ uri: data.item.thumbnail }}
            alt="product"
            w="full"
            h={24}
            resizeMode="contain"
          />
        </Center>
        <VStack w="60%" px={2} space={2}>
          <Text isTruncated color={Colors.black} bold fontSize={10}>
            {data.item.title}
          </Text>
          <Text color={Colors.lightBlack}>${data.item.price}</Text>
        </VStack>
        <Center w="15%">
          <Button
            bg={Colors.main}
            _pressed={{ bg: Colors.main }}
            _text={{ color: Colors.white }}
          >
            5
          </Button>
        </Center>
      </HStack>
    </Box>
  </Pressable>
);

const renderHiddenItems = () => (
  <Pressable
    w={50}
    roundedTopRight={10}
    roundedBottomRight={10}
    h="88%"
    ml="auto"
    justifyContent="center"
    bg={Colors.red}
  >
    <Center alignItems="center" space={2}>
      <FontAwesome name="trash" size={24} color={Colors.white} />
    </Center>
  </Pressable>
);

const CartItems = () => {
  return (
    <Box mr={6}>
      <Swiper />
    </Box>
  );
};

export default CartItems;
