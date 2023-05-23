import {
  Avatar,
  Box,
  CheckIcon,
  FormControl,
  HStack,
  Heading,
  Select,
  Text,
  TextArea,
  VStack,
} from "native-base";
import React from "react";
import Rating from "./Rating";
import Colors from "../color";
import Message from "./Notifications/Message";
import Buttone from "./Buttone";

const Review = () => {
  const [ratings, setRatings] = React.useState("5");

  return (
    <>
      <Box mt={9}>
        <Heading
          mb={2}
          pl={5}
          color={Colors.black}
          fontWeight="bold"
          fontSize={15}
        >
          REVIEW
        </Heading>
      </Box>
      {/* NO REVIEW */}
      <Message bg={Colors.deepGray} color={Colors.main} size={15}>
        No review yet
      </Message>
      {/* REVIEW */}
      <Box px={5} py={2} mt={5} bg={Colors.deepGray} rounded="md">
        <HStack alignItems="center" justifyContent="space-between">
          <HStack alignItems="center">
            <Avatar
              size="sm"
              source={{
                uri: "https://i.dummyjson.com/data/user/1/avatar.jpg",
              }}
            />
            <Text ml={2} color={Colors.black} fontWeight="bold">
              John Doe
            </Text>
          </HStack>
          <Rating value={4} />
        </HStack>
        {/* time */}
        <Text mt={2} color={Colors.black}>
          Jan 20, 2021
        </Text>
        <Message bg={Colors.white} color={Colors.black} size={15}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quibusdam, quia, quos voluptates voluptatibus quod
          voluptatem quas doloribus quidem natus. Quisquam voluptatum,
          quibusdam, quia, quos voluptates voluptatibus quod voluptatem quas
          doloribus quidem natus.
        </Message>
      </Box>

      {/* WRITE REVIEW */}
      <Box mt={5}>
        <Heading color={Colors.black} fontWeight="bold" fontSize={15}>
          WRITE A REVIEW
        </Heading>
        <VStack space={2} mt={2}>
          <FormControl>
            <FormControl.Label
              _text={{ color: Colors.black, fontWeight: "bold" }}
            >
              Rating
            </FormControl.Label>
            <Select
              bg={Colors.subGreen}
              borderWidth={0}
              rounded={5}
              py={3}
              placeholder="Choose Rate"
              _selectedItem={{
                bg: Colors.main,
                endIcon: <CheckIcon size={2} />,
                justifyContent: "center",
                alignItems: "center",
              }}
              selectedValue={ratings}
              onValueChange={(itemValue) => setRatings(itemValue)}
            >
              <Select.Item label="1" value="1" />
              <Select.Item label="2" value="2" />
              <Select.Item label="3" value="3" />
              <Select.Item label="4" value="4" />
              <Select.Item label="5" value="5" />
            </Select>
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{ color: Colors.black, fontWeight: "bold" }}
            >
              Comment
            </FormControl.Label>
            <TextArea
              h={20}
              rounded={5}
              borderWidth={0}
              placeholder="This product is good...."
              bg={Colors.subGreen}
              _focus={{ bg: Colors.subGreen }}
            />
          </FormControl>
          <Buttone bg={Colors.main} color={Colors.white} mt={5}>
            Submit
          </Buttone>
        </VStack>
      </Box>
    </>
  );
};

export default Review;
