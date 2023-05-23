import {
  Box,
  HStack,
  Heading,
  Image,
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
import { useNavigation } from "@react-navigation/native";

const SingleProductScreen = ({ route }) => {
  const [value, setValue] = useState(1);
  const navigation = useNavigation();
  const product = route.params.item;
  console.log("product", product);
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
            <Buttone bg={Colors.main} color={Colors.white} mt={10}>
              ADD TO CART
            </Buttone>
          </Box>

          <Review />
        </Box>
      </ScrollView>
    </Box>
  );
};

export default SingleProductScreen;
