import { Button, Center, Heading, Image, Text, View } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

import Colors from "../color";
import Tabs from "../Components/Profile/Tabs";
import { connect } from "react-redux";
import { logout } from "../Stores/authen/authenAction";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = ({ userInfo, logout }) => {
  const navigation = useNavigation();

  const handleLogout = () => {
    logout();
    navigation.navigate("Login");
  };

  return (
    <>
      <Center bg={Colors.main} pt={10} pb={6} position="relative">
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
          }}
          alt="profile"
          w={24}
          h={24}
          resizeMode="cover"
        />
        <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
          {userInfo.username}
        </Heading>
        <Text italic fontSize={12} color={Colors.white}>
          {userInfo.fullname}
        </Text>
        <View position="absolute" right={0} top={0} p={2}>
          <Button
            leftIcon={<AntDesign name="logout" size={20} color={Colors.main} />}
            bg={Colors.white}
            onPress={handleLogout}
          >
            <Text fontSize={12} color={Colors.main}>
              Sign out
            </Text>
          </Button>
        </View>
      </Center>

      {/* Tabs */}
      <Tabs />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.authenReducer.user.info,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
