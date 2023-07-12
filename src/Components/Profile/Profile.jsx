import { Box, FormControl, Input, ScrollView, Text, VStack } from "native-base";
import React from "react";

import Colors from "../../color";
import Buttone from "../Buttone";
import { useSelector } from "react-redux";

const Profile = () => {
  const userInfo = useSelector((state) => state.authenReducer.user.info);

  const Inputs = [
    {
      label: "Full Name",
      value: userInfo.fullname,
      type: "text",
    },
    {
      label: "Email",
      value: userInfo.email,
      type: "email",
    },
    {
      label: "Username",
      value: userInfo.username,
      type: "text",
    },
    {
      label: "Phone",
      value: userInfo.phone,
      type: "phone",
    },
    {
      label: "New Password",
      value: "********",
      type: "password",
    },
    {
      label: "Confirm Password",
      value: "********",
      type: "password",
    },
  ];

  return (
    <Box h="full" bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10}>
          {Inputs.map((input, index) => (
            <FormControl key={index}>
              <FormControl.Label
                _text={{
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {input.label}
              </FormControl.Label>
              <Input
                borderWidth={0}
                bg={Colors.subGreen}
                py={4}
                type={input.type}
                placeholder={input.value}
                value={input.value}
                color={Colors.main}
                fontSize={20}
                _focus={{
                  bg: Colors.subGreen,
                  borderColor: Colors.main,
                  borderWidth: 1,
                }}
              />
            </FormControl>
          ))}
          <Buttone bg={Colors.main} color={Colors.white}>
            Update Profile
          </Buttone>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default Profile;
