import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Badge,
  Box,
  Flex,
  HStack,
  IconButton,
  Pressable,
  ScrollView,
  Text,
} from "native-base";
import React from "react";

import { connect } from "react-redux";
import { getAddresses } from "../../Stores/address/addressAction";
import Colors from "../../color";

const DeliveryAddress = ({
  getAddresses,
  addresses,
  token,
  defaultAddressId,
}) => {
  React.useEffect(() => {
    getAddresses({ token });
  }, []);

  console.log("addresses", addresses);

  return (
    <Box h="full" bg={Colors.white} pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {addresses.map((address) => (
          <Pressable key={address.id}>
            <HStack
              space={5}
              px={3}
              py={3}
              my={1}
              bg={Colors.subGreen}
              rounded={10}
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Text fontSize={9} color={Colors.blue} isTruncated>
                  {address.receiverName} - {address.receiverPhone}
                </Text>
                <Text fontSize={11} color={Colors.blue} isTruncated>
                  {address.addressString}
                </Text>
              </Box>
              <Flex flexDirection="row">
                {defaultAddressId === address.id && (
                  <Badge
                    colorScheme="info"
                    variant="outline"
                    rounded={10}
                    my={2}
                    _text={{ fontSize: 9 }}
                  >
                    default
                  </Badge>
                )}
                <IconButton
                  variant="unstyled"
                  icon={
                    <MaterialCommunityIcons
                      name="square-edit-outline"
                      size={24}
                      color="black"
                    />
                  }
                  _icon={{
                    color: "darkText",
                  }}
                />
              </Flex>
            </HStack>
          </Pressable>
        ))}
      </ScrollView>
    </Box>
  );
};

function mapStateToProps(state) {
  return {
    addresses: state.addressReducer.addresses,
    loading: state.addressReducer.loading,
    token: state.authenReducer.user.token,
    defaultAddressId: state.authenReducer.user.info.defaultAddress.id,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAddresses: ({ token }) => dispatch(getAddresses({ token })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryAddress);
