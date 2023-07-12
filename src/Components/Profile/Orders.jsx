import { Box, Button, HStack, Pressable, ScrollView, Text } from "native-base";
import React from "react";

import { connect } from "react-redux";
import { getOrders } from "../../Stores/order/orderAction";
import Colors from "../../color";

const Orders = ({ getOrders, orders, token }) => {
  React.useEffect(() => {
    getOrders({ token });
  }, []);

  return (
    <Box h="full" bg={Colors.white} pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {orders.map((order) => (
          <Pressable key={order.id}>
            <HStack
              space={5}
              px={5}
              py={3}
              bg={Colors.subGreen}
              rounded={10}
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize={9} color={Colors.blue} isTruncated>
                Order {order.id}
              </Text>
              <Text fontSize={12} bold color={Colors.black} isTruncated>
                {order.status}
              </Text>
              <Text fontSize={11} italic color={Colors.black} isTruncated>
                {order.createTime}
              </Text>
              <Button
                px={7}
                py={1.5}
                rounded={50}
                bg={Colors.main}
                _text={{ color: Colors.white }}
                _pressed={{ bg: Colors.main }}
              >
                {order.total}
              </Button>
            </HStack>
          </Pressable>
        ))}
      </ScrollView>
    </Box>
  );
};

function mapStateToProps(state) {
  return {
    orders: state.orderReducer.orders,
    loading: state.orderReducer.loading,
    token: state.authenReducer.user.token,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getOrders: ({ token }) => dispatch(getOrders({ token })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
