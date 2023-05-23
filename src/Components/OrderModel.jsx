import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  Modal,
  Pressable,
  Text,
  VStack,
} from "native-base";
import { useState } from "react";
import Buttone from "./Buttone";
import Colors from "../color";

const OrdersInfos = [
  {
    title: "Products",
    price: 100,
    color: "black",
  },
  {
    title: "Shipping",
    price: 24,
    color: "black",
  },
  {
    title: "Tax",
    price: 10,
    color: "black",
  },
  {
    title: "Total",
    price: 134,
    color: "main",
  },
];

const OrderModel = () => {
  const [showModel, setShowModel] = useState(false);

  return (
    <Center>
      <Buttone
        onPress={() => setShowModel(true)}
        bg={Colors.main}
        color={Colors.white}
        mt={5}
      >
        SHOW PAYMENT & TOTAL
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
                    $100
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Pressable
              w="full"
              justifyContent="center"
              bg={Colors.paypal}
              h={45}
              rounded={2}
              onPress={() => setShowModel(false)}
            >
              <Image
                source={{
                  uri: "https://logos-world.net/wp-content/uploads/2020/07/PayPal-Logo.png",
                }}
                alt="Paypal"
                w="full"
                resizeMode="contain"
                h={34}
              />
            </Pressable>
            <Button
              flex={1}
              bg={Colors.black}
              mt={4}
              color={Colors.white}
              onPress={() => setShowModel(false)}
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

export default OrderModel;
