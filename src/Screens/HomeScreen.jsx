import React from "react";
import Colors from "../color";
import { Box } from "native-base";
import HomeSearch from "../Components/HomeSearch";
import HomeProduct from "../Components/HomeProduct";

const HomeScreen = () => {
  return (
    <Box flex={1} bg={Colors.subGreen} alignItems="center">
      <HomeSearch />
      <HomeProduct />
    </Box>
  );
};

export default HomeScreen;
