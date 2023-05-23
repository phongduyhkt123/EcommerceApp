import { Box, Button, Center, Image, VStack } from "native-base";
import React from "react";
import Colors from "../color";
import Buttone from "../Components/Buttone";

const NotVerifyScreen = () => {
  return (
    <Box flex={1} bg={Colors.main} safeAreaTop>
      <Center w="full" h="40%">
        <Image
          source={require("../../assets/verify.png")}
          alt="verify"
          size="lg"
          borderRadius={50}
        />
      </Center>
      <VStack space={6} px={5} alignItems="center">
        <Buttone
          bg={Colors.black}
          color={Colors.white}
          onPress={() => alert("Resend Verification Email")}
        >
          SIGN UP
        </Buttone>
        <Buttone
          bg={Colors.white}
          color={Colors.black}
          onPress={() => alert("Resend Verification Email")}
        >
          LOGIN
        </Buttone>
      </VStack>
    </Box>
  );
};

export default NotVerifyScreen;
