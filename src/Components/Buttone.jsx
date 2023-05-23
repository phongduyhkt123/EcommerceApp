import { Button } from "native-base";
import React from "react";

const Buttone = ({ mt, bg, color, children, onPress }) => {
  return (
    <Button
      w="full"
      rounded="full"
      mt={mt}
      bg={bg}
      color={color}
      _text={{ color: color, fontWeight: "bold" }}
      _pressed={{ bg: bg }}
      onPress={onPress}
    >
      {children}
    </Button>
  );
};

export default Buttone;
