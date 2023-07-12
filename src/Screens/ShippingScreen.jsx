import {
  Box,
  Center,
  CheckIcon,
  FormControl,
  Input,
  ScrollView,
  Text,
  VStack,
  Select as SelectBase,
  WarningOutlineIcon,
} from "native-base";
import React, { useState } from "react";

import Colors from "../color";
import Buttone from "../Components/Buttone";
import { useNavigation } from "@react-navigation/native";
import {
  getCities,
  getDistricts,
  getWards,
  setAddress,
} from "../Stores/shipping/shippingAction";
import { connect } from "react-redux";
import Select from "../Components/Select";

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
  getCities,
  getDistricts,
  setAddress,
  getWards,
  cities,
  districts,
  wards,
  address,
}) => {
  const navigation = useNavigation();

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

            <Buttone
              bg={Colors.main}
              color={Colors.white}
              onPress={() => navigation.navigate("Checkout")}
            >
              Continue
            </Buttone>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  cities: state.shippingReducer.cities,
  districts: state.shippingReducer.districts,
  wards: state.shippingReducer.wards,
  address: state.shippingReducer.address,
});

const mapDispatchToProps = (dispatch) => ({
  getCities: () => dispatch(getCities()),
  getDistricts: (cityId) => dispatch(getDistricts(cityId)),
  getWards: (districtId) => dispatch(getWards(districtId)),
  setAddress: (address) => dispatch(setAddress(address)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShippingScreen);
