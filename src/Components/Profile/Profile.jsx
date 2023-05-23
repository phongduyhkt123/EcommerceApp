import { Box, FormControl, Input, ScrollView, Text, VStack } from "native-base";
import React from "react";

import Colors from "../../color";
import Buttone from "../Buttone";

const Inputs = [
  {
    label: "Full Name",
    placeholder: "John Doe",
    type: "text",
  },
  {
    label: "Email",
    placeholder: "aaa@gmail.com",
    type: "email",
  },
  {
    label: "New Password",
    placeholder: "********",
    type: "password",
  },
  {
    label: "Confirm Password",
    placeholder: "********",
    type: "password",
  },
];

const Profile = () => {
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
                placeholder={input.placeholder}
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
