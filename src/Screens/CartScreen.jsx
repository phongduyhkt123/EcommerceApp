import { Box, Button, Center, HStack, ScrollView, Text } from "native-base";
import React, { useMemo } from "react";
import Buttone from "../Components/Buttone";
import CartItems from "../Components/CartItems";
import Colors from "../color";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { commas } from "../utils/utils";

const CartScreen = ({ cartItems }) => {
  const navigation = useNavigation();

  const totalPrices = useMemo(() => {
    return cartItems.reduce((total, item) => {
      return total + item.productVariation.price*(1 - item.productVariation.discount/100) * item.quantity;
    }, 0);
  }, [cartItems]);

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
              {commas(totalPrices)}
            </Button>
          </HStack>
        </Center>

        {/* Checkout */}
        <Center px={5}>
          <Buttone
            bg={Colors.black}
            color={Colors.white}
            mt={10}
            onPress={() => navigation.navigate("Shipping")}
          >
            Checkout
          </Buttone>
        </Center>
      </ScrollView>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartReducer.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
