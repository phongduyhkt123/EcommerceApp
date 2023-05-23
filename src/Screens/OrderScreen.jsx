import { Box, Heading, ScrollView, Text } from "native-base";
import React from "react";

import Colors from "../color";
import OrderInfo from "../Components/OrderInfo";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import OrderItem from "../Components/OrderItem";
import PlaceOrderModel from "../Components/PlaceOrderModel";
import OrderModel from "../Components/OrderModel";

const OrderScreen = () => {
  return (
    <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <OrderInfo
            title="SHIPPING INFO"
            subTitle="Shipping: Duy"
            text="payment: Cash on delivery"
            danger
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
        <OrderItem />
        {/* Total */}
        <OrderModel />
      </Box>
    </Box>
  );
};

export default OrderScreen;
