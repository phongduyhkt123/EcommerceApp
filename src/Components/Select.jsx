import { CheckIcon, FormControl, Select as SelectBase } from "native-base";
import Colors from "../color";
import React from "react";

const Select = ({
  label,
  children,
  onOpen = () => {},
  onValueChange = () => {},
}) => {
  return (
    <FormControl w="100%" isRequired>
      <FormControl.Label _text={{ fontSize: "12px", fontWeight: "bold" }}>
        {label}
      </FormControl.Label>
      <SelectBase
        borderWidth={0.2}
        borderColor={Colors.main}
        borderRadius={10}
        bg={Colors.subGreen}
        py={4}
        color={Colors.main}
        minWidth="200"
        accessibilityLabel={label}
        placeholder={label}
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size={5} />,
        }}
        onOpen={onOpen}
        onValueChange={onValueChange}
      >
        {children}
      </SelectBase>
    </FormControl>
  );
};

export default Select;
