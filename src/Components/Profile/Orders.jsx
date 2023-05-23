import { Box, Button, HStack, Pressable, ScrollView, Text } from "native-base";
import React from "react";

import Colors from "../../color";

const Orders = () => {
  return (
    <Box h="full" bg={Colors.white} pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Paid */}
        <Pressable>
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
              Order #123456789
            </Text>
            <Text fontSize={12} bold color={Colors.black} isTruncated>
              PAID
            </Text>
            <Text fontSize={11} italic color={Colors.black} isTruncated>
              Dec 12 2022
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={50}
              bg={Colors.main}
              _text={{ color: Colors.white }}
              _pressed={{ bg: Colors.main }}
            >
              $456
            </Button>
          </HStack>
        </Pressable>

        {/* not paid */}
        <Pressable>
          <HStack
            space={5}
            px={5}
            py={3}
            rounded={10}
            justifyContent="space-between"
            alignItems="center"
          >
            <Text fontSize={9} color={Colors.blue} isTruncated>
              Order #123456789
            </Text>
            <Text fontSize={12} bold color={Colors.black} isTruncated>
              NOT PAID
            </Text>
            <Text fontSize={11} italic color={Colors.black} isTruncated>
              Dec 12 2022
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={50}
              bg={Colors.red}
              _text={{ color: Colors.white }}
              _pressed={{ bg: Colors.red }}
            >
              $456
            </Button>
          </HStack>
        </Pressable>
      </ScrollView>
    </Box>
  );
};

export default Orders;
