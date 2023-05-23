import {
  Box,
  Center,
  FormControl,
  Input,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import React from "react";

import Colors from "../color";
import Buttone from "../Components/Buttone";

const ShippingInputs = [
  {
    label: "Enter city",
    type: "text",
    placeholder: "Enter city",
  },
  {
    label: "Enter country",
    type: "text",
    placeholder: "Enter country",
  },
  {
    label: "Enter address",
    type: "text",
    placeholder: "Enter address",
  },
];

const ShippingScreen = () => {
  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      {/* header */}
      <Center pb={5}>
        <Text color="white" fontSize="lg" fontWeight="bold">
          DELIVERY ADDRESS
        </Text>
      </Center>
      {/* inputs */}
      <Box
        px={5}
        flex={1}
        bg="white"
        borderTopLeftRadius={30}
        borderTopRightRadius={30}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {ShippingInputs.map((input, index) => (
              <FormControl key={index}>
                <FormControl.Label
                  _text={{ fontSize: "12px", fontWeight: "bold" }}
                >
                  {input.label}
                </FormControl.Label>
                <Input
                  borderWidth={0.2}
                  borderColor={Colors.main}
                  borderRadius={10}
                  bg={Colors.subGreen}
                  py={4}
                  placeholder={input.placeholder}
                  type={input.type}
                  color={Colors.main}
                  _focus={{
                    bg: Colors.subGreen,
                    borderWidth: 1,
                    borderColor: Colors.main,
                  }}
                />
              </FormControl>
            ))}
            <Buttone bg={Colors.main} color={Colors.white}>
              Continue
            </Buttone>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};
export default ShippingScreen;
