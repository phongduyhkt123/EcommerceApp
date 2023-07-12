import { FontAwesome, Ionicons } from "@expo/vector-icons";
import {
  Box,
  Center,
  HStack,
  Image,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import React from "react";

import Colors from "../color";
import Buttone from "../Components/Buttone";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";

const PAYPAL = 1;
const DISCOVER = 2;
const GOOGLEPAY = 3;

const paymentMethods = [
  {
    image: "https://img.freepik.com/free-icon/paypal_318-674245.jpg",
    alt: "paypal",
    icon: "Ionicons",
    value: PAYPAL,
  },
  {
    image: "https://1000logos.net/wp-content/uploads/2021/05/Discover-logo.png",
    alt: "discover",
    icon: "fontAwesome",
    value: DISCOVER,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/1200px-Google_Pay_Logo.svg.png",
    alt: "googlepay",
    icon: "fontAwesome",
    value: GOOGLEPAY,
  },
];

const PaymentScreen = ({ address }) => {
  const [paymentMethod, setPaymentMethod] = React.useState(1);
  console.log("address", address);

  const navigation = useNavigation();

  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      {/* header */}
      <Center pb={5}>
        <Text color={Colors.white} fontSize="lg" fontWeight="bold">
          PAYMENT METHOD
        </Text>
      </Center>
      {/* Selection */}
      <Box
        px={5}
        flex={1}
        bg={Colors.subGreen}
        borderTopLeftRadius={30}
        borderTopRightRadius={30}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {paymentMethods.map((item) => (
              <Pressable
                key={item.value}
                onPress={() => setPaymentMethod(item.value)}
              >
                <HStack
                  space={5}
                  alignItems="center"
                  px={3}
                  py={1}
                  rounded={30}
                  justifyContent="space-between"
                  bg={Colors.white}
                >
                  <Box>
                    <Image
                      source={{
                        uri: item.image,
                      }}
                      alt={item.alt}
                      resizeMode="contain"
                      w={50}
                      h={50}
                    />
                  </Box>
                  {item.value === paymentMethod ? (
                    <Ionicons
                      name="checkmark-circle"
                      size={30}
                      color={Colors.main}
                    />
                  ) : (
                    <FontAwesome
                      name="circle-thin"
                      size={30}
                      color={Colors.main}
                    />
                  )}
                </HStack>
              </Pressable>
            ))}

            <Buttone
              bg={Colors.main}
              color={Colors.white}
              onPress={() =>
                navigation.navigate("Placeorder", {
                  paymentMethod,
                })
              }
            >
              Continue
            </Buttone>
            <Text italic textAlign="center">
              Payment method is <Text bold> Paypal </Text> by default
            </Text>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  address: state.shippingReducer.address,
});

export default connect(mapStateToProps)(PaymentScreen);
