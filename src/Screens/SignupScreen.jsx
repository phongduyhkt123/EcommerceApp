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
  Pressable,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { connect } from "react-redux";
import Colors from "../color";

import { signup } from "../Stores/signup/signupAction";
import {
  alert,
  SUCCESS_STATUS,
  ERROR_STATUS,
} from "../Stores/alert/alertAction";

const SignupScreen = ({ navigation, signup, errors, loading, alert }) => {
  const [signupInfo, setSignupInfo] = React.useState({
    fullname: "",
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [signupClick, setSignupClick] = React.useState(false);

  const handleSignup = () => {
    if (signupInfo.password !== confirmPassword) {
      alert({
        body: {
          description: "Password and confirm password does not match",
          title: "Error",
          status: ERROR_STATUS,
        },
      });
      return;
    }
    console.log(signupInfo);
    signup({ ...signupInfo });
    setSignupClick(true);
  };

  React.useEffect(() => {
    console.log("usefefef");
    if (!signupClick) return;
    if (loading) return;
    setSignupClick(false);

    if (errors) {
      console.log("error", errors);
      if (errors.constructor.name == "Array") {
        alert({
          body: {
            description: errors.join("\n"),
            title: "Error",
            status: ERROR_STATUS,
          },
        });
      } else {
        alert({
          body: {
            description: errors,
            title: "Error",
            status: ERROR_STATUS,
          },
        });
      }
      return;
    }

    alert({
      body: {
        description: "Signup success. Please check your email to verify",
        title: "Success",
        status: SUCCESS_STATUS,
      },
    });
  }, [loading]);

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
              bgColor={Colors.white}
              borderColor={Colors.main}
              type="text"
              placeholder="Full name"
              color={Colors.main}
              value={signupInfo.fullname}
              onChangeText={(text) =>
                setSignupInfo({ ...signupInfo, fullname: text })
              }
            />
          </FormControl>
          {/* Username */}
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
              bgColor={Colors.white}
              borderColor={Colors.main}
              type="text"
              placeholder="Username"
              color={Colors.main}
              value={signupInfo.username}
              onChangeText={(text) =>
                setSignupInfo({ ...signupInfo, username: text })
              }
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
              bgColor={Colors.white}
              borderColor={Colors.main}
              type="email"
              placeholder="Email"
              color={Colors.main}
              background={Colors.white}
              value={signupInfo.email}
              onChangeText={(text) =>
                setSignupInfo({ ...signupInfo, email: text })
              }
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
              bgColor={Colors.white}
              borderColor={Colors.main}
              type="phone"
              placeholder="Phone"
              color={Colors.main}
              background={Colors.white}
              value={signupInfo.phone}
              onChangeText={(text) =>
                setSignupInfo({ ...signupInfo, phone: text })
              }
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
              bgColor={Colors.white}
              borderColor={Colors.main}
              type="password"
              placeholder="Password"
              color={Colors.main}
              background={Colors.white}
              value={signupInfo.password}
              onChangeText={(text) =>
                setSignupInfo({ ...signupInfo, password: text })
              }
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
              bgColor={Colors.white}
              borderColor={Colors.main}
              type="password"
              placeholder="Confirm Password"
              color={Colors.main}
              background={Colors.white}
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
            />
          </FormControl>
          <Button
            onPress={handleSignup}
            bg={Colors.main}
            _text={{
              color: Colors.white,
            }}
            isLoading={loading}
            isLoadingText="Signing up"
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

const mapStateToProps = (state) => {
  return {
    loading: state.signupReducer.loading,
    errors: state.signupReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (signupInfo) => dispatch(signup({ signupInfo })),
    alert: ({ type, body }) => dispatch(alert({ type, body })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);
