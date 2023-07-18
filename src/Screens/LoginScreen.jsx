import { AntDesign, Entypo, FontAwesome5 } from "@expo/vector-icons";
import {
  Box,
  Button,
  FormControl,
  HStack,
  Heading,
  IconButton,
  Image,
  Input,
  Link,
  Pressable,
  Text,
  VStack,
  View,
} from "native-base";
import { connect } from "react-redux";

import { login } from "../Stores/authen/authenAction";

import React, { useEffect } from "react";
import Colors from "../color";

const LoginScreen = ({ navigation, login, user }) => {
  const [loginInfo, setLoginKey] = React.useState({
    loginKey: "",
    password: "",
  });

  const [isLogin, setIsLogin] = React.useState(false);

  const handleLogin = () => {
    setIsLogin(true);
    login(loginInfo);
  };

  useEffect(() => {
    if (!isLogin) return;
    if (user.token) {
      navigation.navigate("Bottom");
    } else {
      console.log("login fail");
    }
  }, [user]);

  return (
    <Box flex={1} bg={Colors.black}>
      <Image
        flex={1}
        alt="logo"
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../../assets/cover2.png")}
      />
      <Box
        w="full"
        h="50%"
        position="absolute"
        top={0}
        px={6}
        justifyContent="center"
      >
        <Heading> Login </Heading>
        <VStack space={3} mt={5}>
          <FormControl>
            <Input
              InputLeftElement={
                <Entypo
                  name="user"
                  size={24}
                  color={Colors.main}
                  style={{ marginLeft: 6 }}
                />
              }
              value={loginInfo.loginKey}
              onChangeText={(text) =>
                setLoginKey({ ...loginInfo, loginKey: text })
              }
              type="text"
              placeholder="Username"
            />
          </FormControl>
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
              value={loginInfo.password}
              onChangeText={(text) =>
                setLoginKey({ ...loginInfo, password: text })
              }
              type="password"
              placeholder="Password"
            />
          </FormControl>
          <Button
            onPress={handleLogin}
            bg={Colors.main}
            _text={{
              color: Colors.white,
            }}
          >
            Login
          </Button>
          <HStack justifyContent="center" alignItem="center">
            <Pressable onPress={() => navigation.navigate("Signup")}>
              <Text color={Colors.deepestGray}>Sign Up</Text>
            </Pressable>
          </HStack>

          <HStack justifyContent="center" alignItem="center">
            <Text fontSize="sm" color="muted.700" fontWeight={400}>
              Forgot your password?{" "}
            </Text>
            <Link
              _text={{
                color: "cyan.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              Reset
            </Link>
          </HStack>

          <HStack justifyContent="center" alignItem="center">
            <Text fontSize="sm" color="muted.700" fontWeight={400}>
              Login with{" "}
            </Text>
          </HStack>

          <HStack display="flex" alignItem="center">
            <View
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-around"
              w="full"
            >
              <Button
                flex={1}
                m={1}
                background={Colors.red}
                leftIcon={
                  <FontAwesome5 name="google" size={24} color="white" />
                }
              >
                Google
              </Button>
              <Button
                flex={1}
                m={1}
                background={Colors.blue}
                leftIcon={
                  <FontAwesome5 name="facebook" size={24} color="white" />
                }
              >
                Facebook
              </Button>
            </View>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

function mapStateToProps(state) {
  return {
    user: state.authenReducer.user,
    loading: state.authenReducer.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: ({ loginKey, password }) => dispatch(login({ loginKey, password })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
