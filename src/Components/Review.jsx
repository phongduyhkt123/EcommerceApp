import { Avatar, Box, HStack, Heading, Text } from "native-base";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getComments } from "../Stores/comment/commentAction";
import Colors from "../color";
import Message from "./Notifications/Message";
import Rating from "./Rating";

const Review = ({ productId, token, getComments, comments, loading }) => {
  useEffect(() => {
    getComments({ token, productId });
  }, []);

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
      {comments.length === 0 && !loading && (
        <Message bg={Colors.deepGray} color={Colors.main} size={15}>
          No review yet
        </Message>
      )}

      {/* REVIEW */}
      {comments.map((comment) => (
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
                {comment.fullnameOfUser}
              </Text>
            </HStack>
            <Rating value={comment.rate} />
          </HStack>
          {/* time */}
          <Text mt={2} color={Colors.black}>
            Jan 20, 2021
          </Text>
          <Message bg={Colors.white} color={Colors.black} size={15}>
            {comment.description}
          </Message>
        </Box>
      ))}

      {/* WRITE REVIEW */}
      {/* <Box mt={5}>
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
      </Box> */}
    </>
  );
};

const mapStateToProps = (state) => ({
  comments: state.commentReducer.comments,
  loading: state.commentReducer.loading,
  token: state.authenReducer.user.token,
});
const mapDispatchToProps = (dispatch) => ({
  getComments: ({ token, productId }) =>
    dispatch(getComments({ token, productId })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Review);
