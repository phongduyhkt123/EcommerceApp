import { Box, Button, Center, HStack, Modal, Text, VStack } from "native-base";
import { useState } from "react";
import Buttone from "./Buttone";
import Colors from "../color";
import { createOrder } from "../Stores/order/orderAction";
import { connect } from "react-redux";

import { commas } from "../utils/utils";

const PlaceOrderModel = ({ data, token, createOrder }) => {
  const [showModel, setShowModel] = useState(false);

  const productPrices = useMemo(() => {
    return data.cartItems.reduce((total, item) => {
      return (
        total +
        item.productVariation.price *
          (1 - item.productVariation.discount / 100) *
          item.quantity
      );
    }, 0);
  }, [data.cartItems]);

  const shippingPrice = 24000;

  const OrdersInfos = [
    {
      title: "Products",
      price: productPrices,
      color: "black",
    },
    {
      title: "Shipping",
      price: shippingPrice,
      color: "black",
    },
    {
      title: "Total",
      price: productPrices + shippingPrice,
      color: "main",
    },
  ];

  const handlePlaceOrder = () => {
    const order = {
      products: data.cartItems.map((item) => ({
        id: item.productVariation.id,
        quantity: item.quantity,
      })),
      address:
        data.deliveryAddress.address +
        ", " +
        data.deliveryAddress.ward +
        ", " +
        data.deliveryAddress.district +
        ", " +
        data.deliveryAddress.city,
      receiverName: data.deliveryAddress.name,
      receiverPhone: data.deliveryAddress.phone,
      paymentMethod: data.paymentMethod,
      shipPrice: shippingPrice,
      toDistrict: 1,
    };

    createOrder({ token, order });

    setShowModel(false);

    navigator.navigate("Bottom");
  };

  return (
    <Center>
      <Buttone
        onPress={() => setShowModel(true)}
        bg={Colors.black}
        color={Colors.white}
        mt={5}
      >
        SHOW TOTAL
      </Buttone>
      <Modal isOpen={showModel} onClose={() => setShowModel(false)} size="lg">
        <Modal.Content maxWidth={350}>
          <Modal.CloseButton />
          <Modal.Header>Order Total</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              {OrdersInfos.map((item, index) => (
                <HStack
                  key={index}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontWeight="medium">{item.title}</Text>
                  <Text
                    color={item.color == "main" ? Colors.main : Colors.black}
                    bold
                  >
                    ${item.price}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex={1}
              bg={Colors.main}
              color={Colors.white}
              onPress={handlePlaceOrder}
              _pressed={{ bg: Colors.main, opacity: 0.5 }}
            >
              PLACE ORDER
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.authenReducer.user.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createOrder: ({ token, order }) => dispatch(createOrder({ token, order })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceOrderModel);
