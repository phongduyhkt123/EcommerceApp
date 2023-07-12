import { Box, Heading, ScrollView } from "native-base";
import React from "react";

import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { connect, useSelector } from "react-redux";
import OrderInfo from "../Components/OrderInfo";
import OrderItem from "../Components/OrderItem";
import PlaceOrderModel from "../Components/PlaceOrderModel";
import Colors from "../color";

const PlaceOrderScreen = ({ route, address }) => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);

  const { paymentMethod } = route.params;

  return (
    <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <OrderInfo
            title="CUSTOMER"
            subTitle="Admin Doe"
            text="admin@gmail.com"
            icon={<FontAwesome name="user" size={30} color={Colors.white} />}
          />
          <OrderInfo
            title="ORDER INFO"
            subTitle="Shipping: Duy"
            text="payment: Cash on delivery"
            icon={
              <FontAwesome5
                name="shipping-fast"
                size={30}
                color={Colors.white}
              />
            }
          />
          <OrderInfo
            title="DELIVERY TO"
            subTitle="Address: "
            text="123, Main Street, New York, USA"
            icon={
              <Ionicons name="location-sharp" size={30} color={Colors.white} />
            }
          />
        </ScrollView>
      </Box>
      {/* Order item */}
      <Box px={6} flex={1} pb={3}>
        <Heading bold fontsize={16} isTruncated my={4}>
          PRODUCTS
        </Heading>
        <OrderItem data={cartItems} />
        {/* Total */}
        <PlaceOrderModel
          data={{ cartItems, deliveryAddress: address, paymentMethod }}
        />
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  address: state.shippingReducer.address,
});

export default connect(mapStateToProps)(PlaceOrderScreen);
