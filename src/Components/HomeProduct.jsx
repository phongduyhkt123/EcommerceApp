import {
  Box,
  FlatList,
  Flex,
  Heading,
  Image,
  Pressable,
  ScrollView,
  Text,
} from "native-base";
import React from "react";

import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { getProducts } from "../Stores/product/productAction";

import Colors from "../color";
import Rating from "./Rating";

const HomeProduct = ({ getProducts, products, loading }) => {
  const navigation = useNavigation();

  const [page, setPage] = React.useState(1);

  const [onScroll, setOnScroll] = React.useState(false);

  useFocusEffect(
    React.useCallback(() => {
      getProducts({ page: page, limit: 10 });
    }, [])
  );

  const handleLoadMore = () => {
    if (!onScroll) {
      return null;
    }
    setPage(page + 1);
    getProducts({ page: page + 1, limit: 10 });
  };

  console.log("product", products);

  return (
    <ScrollView flex={1} contentContainerStyle={{ flex: 1 }}>
      <Flex direction="row" flex={1}>
        {products && (
          <FlatList
            onScroll={() => setOnScroll(true)}
            numColumns={2}
            px={4}
            showsVerticalScrollIndicator={false}
            onReach
            data={products}
            on
            renderItem={({ item, index }) => {
              return (
                <Pressable
                  key={item.id}
                  w="47%"
                  bg={Colors.white}
                  rounded="md"
                  shadow={2}
                  my={3}
                  mr={index % 2 !== 0 ? 0 : 4}
                  pt={0.3}
                  pb={2}
                  overflow="hidden"
                  onPress={() => navigation.navigate("Single", { item })}
                >
                  <Image
                    source={{ uri: item.avatar }}
                    alt={item.name}
                    w="full"
                    h={24}
                    resizeMode="contain"
                  />
                  <Box px={4} pt={1}>
                    <Heading size="sm">{item.minPrice}$</Heading>

                    <Text
                      fontSize={10}
                      mt={1}
                      isTruncated
                      w="full"
                      overflow={"hidden"}
                    >
                      {item.name.slice(0, 20) + "..."}
                    </Text>
                    <Rating value={5} text={5} />
                  </Box>
                </Pressable>
              );
            }}
            keyExtractor={(item) => item.id}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.5}
          />
        )}
      </Flex>
    </ScrollView>
  );
};

function mapStateToProps(state) {
  return {
    products: state.productReducer.products,
    loading: state.productReducer.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProducts: ({ page, limit }) => dispatch(getProducts({ page, limit })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeProduct);
