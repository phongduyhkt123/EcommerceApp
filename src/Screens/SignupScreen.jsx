import {
  AntDesign,
  Entypo,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  Box,
  Button,
  FormControl,
  HStack,
  Heading,
  Image,
  Input,
  Link,
  Pressable,
  Text,
  VStack,
} from "native-base";
import React from "react";
import Colors from "../color";

const SignupScreen = ({ navigation }) => {
  return (
    <Box flex={1} bg={Colors.black}>
      <Image
        flex={1}
        alt="logo"
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../../assets/cover.png")}
      />
      <Box
        w="full"
        h="50%"
        position="absolute"
        top={0}
        px={6}
        justifyContent="center"
      >
        <Heading> SIGN UP </Heading>
        <VStack space={3} mt={5}>
          {/* Name */}
          <FormControl>
            <Input
              InputLeftElement={
                <FontAwesome
                  name="user"
                  size={24}
                  color={Colors.main}
                  style={{ marginLeft: 6 }}
                />
              }
              type="text"
              placeholder="Name"
            />
          </FormControl>
          {/* Email */}
          <FormControl>
            <Input
              InputLeftElement={
                <MaterialIcons
                  name="email"
                  size={24}
                  color={Colors.main}
                  style={{ marginLeft: 6 }}
                />
              }
              type="email"
              placeholder="Email"
            />
          </FormControl>
          {/* Phone */}
          <FormControl>
            <Input
              InputLeftElement={
                <Entypo
                  name="phone"
                  size={24}
                  color={Colors.main}
                  style={{ marginLeft: 6 }}
                />
              }
              type="phone"
              placeholder="Phone"
            />
          </FormControl>
          {/* Password */}
          <FormControl>
            <Input
              InputLeftElement={
                <AntDesign
                  name="eye"
                  size={24}
                  color={Colors.main}
                  style={{ marginLeft: 6 }}
                />
              }
              type="password"
              placeholder="Password"
            />
          </FormControl>
          <Button
            onPress={() => navigation.navigate("Bottom")}
            bg={Colors.main}
            _text={{
              color: Colors.white,
            }}
          >
            Sign up
          </Button>
          <HStack justifyContent="center" alignItem="center">
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text color={Colors.deepestGray}>Login</Text>
            </Pressable>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default SignupScreen;
