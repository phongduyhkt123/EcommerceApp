import {
  Box,
  Button,
  Center,
  FlatList,
  HStack,
  Image,
  Pressable,
  Text,
  VStack,
} from "native-base";
import React from "react";

import products from "../data/products";
import Colors from "../color";

const OrderItem = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={products.slice(0, 10)}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable>
          <Box mb={3}>
            <HStack
              alignItems={"center"}
              bg={Colors.white}
              shadow={1}
              rounded={10}
              overflow="hidden"
            >
              <Center w="25%" bg={Colors.deepGray}>
                <Image
                  source={{ uri: item.thumbnail }}
                  alt={item.title}
                  w="full"
                  h={24}
                  resizeMethod="scale"
                />
              </Center>
              <VStack w="60%" px={2}>
                <Text isTruncated color={Colors.black} bold fontSize={12}>
                  {item.title}
                </Text>
                <Text color={Colors.lightBlack} bold fontSize={12} mt={2}>
                  ${item.price}
                </Text>
              </VStack>
              <Center>
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
      )}
    ></FlatList>
  );
};

export default OrderItem;
