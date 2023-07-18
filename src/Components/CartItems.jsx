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
import React, { useCallback } from "react";
import { SwipeListView } from "react-native-swipe-list-view";
import { FontAwesome } from "@expo/vector-icons";

import Colors from "../color";
import { useFocusEffect } from "@react-navigation/native";
import { getCart, deleteCart } from "../Stores/cart/cartAction";
import { connect, useSelector } from "react-redux";
import { commas } from "../utils/utils";

const Swiper = connect(
  mapStateToProps,
  mapDispatchToProps
)(({ cartItems, token, getCart, deleteCart }) => {
  useFocusEffect(
    React.useCallback(() => {
      getCart({ token });
    }, [])
  );

  const handleDelete = (productId) => {
    deleteCart({ token, productId });
  };

  const renderHiddenItems = (data) => {
    return (
      <Pressable
        w={50}
        roundedTopRight={10}
        roundedBottomRight={10}
        h="88%"
        ml="auto"
        justifyContent="center"
        bg={Colors.red}
        onPress={() => {
          handleDelete(data.item.productVariation.id);
        }}
      >
        <Center alignItems="center" space={2}>
          <FontAwesome name="trash" size={24} color={Colors.white} />
        </Center>
      </Pressable>
    );
  };

  return (
    <SwipeListView
      rightOpenValue={-50}
      previewRowKey="0"
      previewOpenValue={-40}
      previewOpenDelay={3000}
      data={cartItems}
      renderHiddenItem={renderHiddenItems}
      renderItem={renderItems}
      showsVerticalScrollIndicator={false}
    />
  );
});

function mapStateToProps(state) {
  return {
    loading: state.cartReducer.loading,
    cartItems: state.cartReducer.cartItems,
    token: state.authenReducer.user.token,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCart: ({ token }) => dispatch(getCart({ token })),
    deleteCart: ({ token, productId }) =>
      dispatch(deleteCart({ token, productId })),
  };
}

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
            source={{ uri: data.item.productVariation.avatar.url }}
            alt="product"
            w="full"
            h={24}
            resizeMode="contain"
          />
        </Center>
        <VStack w="60%" px={2} space={2}>
          <Text isTruncated color={Colors.black} bold fontSize={10}>
            {data.item.productVariation.product.name}
          </Text>
          <Text isTruncated color={Colors.black} italic fontSize={9}>
            {data.item.productVariation.variationName}
          </Text>
          <Text color={Colors.lightBlack}>
            $
            {commas(
              data.item.productVariation.discount
                ? data.item.productVariation.price -
                    (data.item.productVariation.price *
                      data.item.productVariation.discount) /
                      100
                : data.item.productVariation.price
            )}
          </Text>
        </VStack>
        <Center w="15%">
          <Button
            bg={Colors.main}
            _pressed={{ bg: Colors.main }}
            _text={{ color: Colors.white }}
          >
            {data.item.quantity}
          </Button>
        </Center>
      </HStack>
    </Box>
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
