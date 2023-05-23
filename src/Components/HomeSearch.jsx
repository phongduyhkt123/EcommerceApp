import { HStack, Input, Pressable, Text } from "native-base";
import React from "react";
import Colors from "../color";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeSearch = () => {
  const navigation = useNavigation();
  return (
    <HStack
      space={2}
      w="full"
      px={6}
      bg={Colors.main}
      py={4}
      alignItems="center"
      justifyContent="center"
      safeAreaTop
    >
      <Input
        InputRightElement={
          <Feather
            name="search"
            size={20}
            color={Colors.main}
            style={{ marginHorizontal: 8 }}
            onPress={() => navigation.navigate("Search")}
          />
        }
        placeholder="Search for products..."
        w="85%"
        bg={Colors.white}
        type="search"
        h={12}
        borderWidth={0}
        _focus={{ bg: Colors.white }}
      />
      {/* Shopping cart */}
      <Pressable
        bg={Colors.white}
        h={12}
        w={12}
        alignItems="center"
        justifyContent="center"
        borderRadius={8}
        onPress={() => navigation.navigate("Cart")}
      >
        <Feather name="shopping-cart" size={20} color={Colors.main} />
        {/* number product */}
        <Text
          position="absolute"
          top={1}
          right={1}
          bg={Colors.red}
          color={Colors.white}
          px={1}
          py={1}
          borderRadius={8}
          fontSize={8}
        >
          10
        </Text>
      </Pressable>
    </HStack>
  );
};

export default HomeSearch;
