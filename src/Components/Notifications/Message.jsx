import { Center, Text } from "native-base";
import React from "react";
import Colors from "../../color";

const Message = ({ bg, color, children, size }) => {
  return (
    <Center bg={bg} rounded="md" px={5} py={2} mt={5}>
      <Text color={color} fontSize={size}>
        {children}
      </Text>
    </Center>
  );
};

export default Message;
