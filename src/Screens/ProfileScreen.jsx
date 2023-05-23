import { Center, Heading, Image, Text } from "native-base";
import React from "react";

import Colors from "../color";
import Tabs from "../Components/Profile/Tabs";

const ProfileScreen = () => {
  return (
    <>
      <Center bg={Colors.main} pt={10} pb={6}>
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
          John Doe
        </Heading>
        <Text italic fontSize={12} color={Colors.white}>
          Joined Dec 12 2020
        </Text>
      </Center>

      {/* Tabs */}
      <Tabs />
    </>
  );
};

export default ProfileScreen;
