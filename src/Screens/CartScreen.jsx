import { Box, Button, Center, HStack, ScrollView, Text } from "native-base";
import React from "react";
import Colors from "../color";
import CartEmpty from "../Components/CartEmpty";
import CartItems from "../Components/CartItems";
import Buttone from "../Components/Buttone";
const CartScreen = () => {
  return (
    <Box flex={1} safeAreaTop bg={Colors.subGreen}>
      {/* Header */}
      <Center w={"100%"} h={50} bg={Colors.main}>
        <Text fontSize={20} bold color={Colors.white}>
          Cart
        </Text>
      </Center>
      {/* Cart empty */}
      {/* <CartEmpty /> */}
      {/* Cart items */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <CartItems />
        {/* Buttons */}
        <Center mt={5}>
          <HStack
            rounded={50}
            justifyContent="space-between"
            bg={Colors.white}
            w="90%"
            h={45}
            pl={5}
            alignItems="center"
            shadow={2}
          >
            <Text> Total </Text>
            <Button
              px={10}
              h={45}
              rounded={50}
              bg={Colors.main}
              _text={{
                color: Colors.white,
                fontWeight: "semibold",
              }}
              _pressed={{ bg: Colors.main }}
            >
              $356
            </Button>
          </HStack>
        </Center>

        {/* Checkout */}
        <Center px={5}>
          <Buttone bg={Colors.black} color={Colors.white} mt={10}>
            Checkout
          </Buttone>
        </Center>
      </ScrollView>
    </Box>
  );
};

export default CartScreen;
