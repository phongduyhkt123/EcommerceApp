import {
  Box,
  Flex,
  HStack,
  Heading,
  Image,
  Pressable,
  ScrollView,
  Spacer,
  Text,
} from "native-base";
import React, { useState } from "react";
import Colors from "../color";
import Rating from "../Components/Rating";
import NumericInput from "react-native-numeric-input";
import Buttone from "../Components/Buttone";
import Review from "../Components/Review";
import { connect, useDispatch, useSelector } from "react-redux";

import { addToCart } from "../Stores/cart/cartAction";
import { alert, ALERT, SUCCESS_STATUS } from "../Stores/alert/alertAction";

const SingleProductScreen = ({ route, addToCart, errors, alert, token }) => {
  const [value, setValue] = useState(1);
  const product = route.params.item;

  const [productVariationId, setProductVariationId] = useState(
    product.variations[0].id
  );

  const handleAddToCart = () => {
    addToCart({
      token: token,
      productId: productVariationId,
      quantity: value,
    });

    if (errors) {
      console.log("err", errors);
    } else {
      alert({
        type: ALERT,
        body: {
          description: "Product added to cart",
          title: "Success",
          status: SUCCESS_STATUS,
        },
      });
    }
  };

  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        <Image
          source={{
            uri: product.avatar,
          }}
          alt="image"
          resizeMode="contain"
          height={300}
          width="full"
        />
        <Box px={5}>
          <Heading
            mb={2}
            pl={5}
            color={Colors.black}
            fontWeight="bold"
            fontSize={15}
          >
            {product.title}
          </Heading>
          <Box px={5} mt={2}>
            <Rating value={5} text="150 reviews" />
          </Box>
          <HStack
            space={2}
            alignItems="center"
            justifyContent="space-between"
            px={5}
            mt={5}
          >
            {product.variations[0].availableQuantity > 0 && (
              <NumericInput
                value={value}
                onChange={setValue}
                totalWidth={140}
                totalHeight={40}
                iconSize={25}
                step={1}
                minValue={1}
                maxValue={product.variations[0].availableQuantity}
                rounded
                textColor={Colors.main}
                iconStyle={{ color: Colors.white }}
                rightButtonBackgroundColor={Colors.main}
                leftButtonBackgroundColor={Colors.main}
              />
            )}
            {product.stock < 0 && (
              <Heading bold color={Colors.red} italic fontSize={12}>
                Out of stock
              </Heading>
            )}

            <Spacer />
            <Heading color={Colors.main} fontWeight="bold" fontSize={20}>
              $ {product.variations[0].price}
            </Heading>
          </HStack>

          <Flex flexDirection="row" px={5} mt={5}>
            {product.variations.map((variation) => (
              <Pressable
                key={variation.id}
                bg={
                  productVariationId === variation.id
                    ? Colors.main
                    : Colors.white
                }
                borderWidth={1}
                borderColor={Colors.main}
                borderRadius={5}
                p={2}
                mr={2}
                onPress={() => setProductVariationId(variation.id)}
              >
                <Text
                  color={
                    productVariationId === variation.id
                      ? Colors.white
                      : Colors.main
                  }
                  fontSize={12}
                >
                  {variation.variationName}
                </Text>
              </Pressable>
            ))}
          </Flex>

          {/* description */}
          <Text
            lineHeight={24}
            px={5}
            mt={5}
            color={Colors.black}
            fontSize={12}
          >
            {product.description}
          </Text>
          <Box px={5} mt={5}>
            <Buttone
              bg={Colors.main}
              color={Colors.white}
              mt={10}
              onPress={handleAddToCart}
            >
              ADD TO CART
            </Buttone>
          </Box>

          <Review />
        </Box>
      </ScrollView>
    </Box>
  );
};

function mapStateToProps(state) {
  return {
    errors: state.cartReducer.error,
    loading: state.cartReducer.loading,
    token: state.authenReducer.user.token,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: ({ token, productId, quantity }) =>
      dispatch(addToCart({ token, productId, quantity })),
    alert: ({ type, body }) => dispatch(alert({ type, body })),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProductScreen);
