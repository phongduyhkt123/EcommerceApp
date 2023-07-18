import {
  Box,
  Center,
  FormControl,
  Input,
  Pressable,
  ScrollView,
  Select as SelectBase,
  Text,
  VStack,
} from "native-base";
import React, { useState } from "react";

import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import Buttone from "../Components/Buttone";
import Select from "../Components/Select";
import {
  getCities,
  getDistricts,
  getWards,
  setAddress,
} from "../Stores/shipping/shippingAction";

import { getAddresses } from "../Stores/address/addressAction";
import Colors from "../color";

const ShippingInputs = [
  {
    label: "Enter address",
    type: "text",
    placeholder: "Enter address",
    value: "address",
  },
  {
    label: "Enter name",
    type: "text",
    placeholder: "Enter name",
    value: "receiverName",
  },
  {
    label: "Enter phone",
    type: "text",
    placeholder: "Enter phone",
    value: "receiverPhone",
  },
];

const ShippingScreen = ({
  token,
  getCities,
  getDistricts,
  setAddress,
  getAddresses,
  getWards,
  cities,
  districts,
  wards,
  address,
  addresses,
}) => {
  const navigation = useNavigation();

  const [showForm, setShowForm] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      getAddresses({ token });
    }, [])
  );

  const handleShowCities = () => {
    cities.length === 0 && getCities();
  };

  const handleShowDistricts = () => {
    address.city.id && getDistricts(address.city.id);
  };

  const handleShowWards = () => {
    address.district.id && getWards(address.district.id);
  };

  const handleSetAddress = (value) => {
    setAddress({ ...address, ...value });
  };

  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      {/* header */}
      <Center pb={5}>
        <Text color={Colors.white} fontSize="lg" fontWeight="bold">
          DELIVERY ADDRESS
        </Text>
      </Center>
      {/* address */}
      {!showForm && (
        <Box
          px={5}
          flex={showForm ? 0 : 1}
          bg={Colors.white}
          borderTopLeftRadius={30}
          borderTopRightRadius={30}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {addresses.map((address) => (
              <Pressable
                key={address.id}
                onPress={() =>
                  setAddress({
                    ...address,
                    ward: { id: address.ward.id, name: address.ward.name },
                    district: {
                      id: address.ward.district.id,
                      name: address.ward.district.name,
                    },
                    city: {
                      id: address.ward.district.city.id,
                      name: address.ward.district.city.name,
                    },
                  })
                }
              >
                <Box
                  bg={Colors.white}
                  shadow={2}
                  rounded={10}
                  p={5}
                  my={2}
                  borderWidth={1}
                  borderColor={Colors.gray}
                >
                  <VStack space={2}>
                    <Text fontSize="lg" fontWeight="bold">
                      {address.receiverName}
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                      {address.receiverPhone}
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                      {address.addressString}
                    </Text>
                  </VStack>
                </Box>
              </Pressable>
            ))}
          </ScrollView>
        </Box>
      )}

      {/* buttons */}
      <Buttone
        mt={5}
        bg={Colors.black}
        color={Colors.white}
        onPress={() => setShowForm(!showForm)}
      >
        {showForm ? "Hide form" : "Add new address"}
      </Buttone>

      {/* inputs */}

      <Box
        px={5}
        flex={showForm ? 1 : 0}
        bg={Colors.white}
        borderTopLeftRadius={30}
        borderTopRightRadius={30}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {showForm && (
            <VStack space={6} mt={5}>
              <Select
                label="Choose City"
                onOpen={handleShowCities}
                onValueChange={(city) =>
                  handleSetAddress({ city: JSON.parse(city) })
                }
              >
                {cities.map((city) => (
                  <SelectBase.Item
                    key={city.id}
                    label={city.name}
                    value={JSON.stringify(city)}
                  />
                ))}
              </Select>

              <Select
                label="Choose District"
                onOpen={handleShowDistricts}
                onValueChange={(district) =>
                  handleSetAddress({ district: JSON.parse(district) })
                }
              >
                {districts.map((district) => (
                  <SelectBase.Item
                    key={district.id}
                    label={district.name}
                    value={JSON.stringify(district)}
                  />
                ))}
              </Select>

              <Select
                label="Choose Ward"
                onOpen={handleShowWards}
                onValueChange={(ward) =>
                  handleSetAddress({ ward: JSON.parse(ward) })
                }
              >
                {wards.map((ward) => (
                  <SelectBase.Item
                    key={ward.id}
                    label={ward.name}
                    value={JSON.stringify(ward)}
                  />
                ))}
              </Select>

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
                    value={address[input.value]}
                    onChangeText={(text) =>
                      handleSetAddress({ [input.value]: text })
                    }
                    _focus={{
                      bg: Colors.subGreen,
                      borderWidth: 1,
                      borderColor: Colors.main,
                    }}
                  />
                </FormControl>
              ))}
            </VStack>
          )}
        </ScrollView>
      </Box>
      <Buttone
        mt={2}
        bg={Colors.black}
        color={Colors.white}
        onPress={() => navigation.navigate("Checkout")}
      >
        Continue
      </Buttone>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  token: state.authenReducer.user.token,
  cities: state.shippingReducer.cities,
  districts: state.shippingReducer.districts,
  wards: state.shippingReducer.wards,
  address: state.shippingReducer.address,
  addresses: state.addressReducer.addresses,
});

const mapDispatchToProps = (dispatch) => ({
  getCities: () => dispatch(getCities()),
  getDistricts: (cityId) => dispatch(getDistricts(cityId)),
  getWards: (districtId) => dispatch(getWards(districtId)),
  setAddress: (address) => dispatch(setAddress(address)),

  getAddresses: ({ token }) => dispatch(getAddresses({ token })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShippingScreen);
