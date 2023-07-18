import {
  Alert,
  CloseIcon,
  HStack,
  IconButton,
  Text,
  VStack,
  useToast,
} from "native-base";
import React from "react";
import { connect } from "react-redux";

import { alert } from "../Stores/alert/alertAction";

const GlobalAlert = ({ alertInfo, alert }) => {
  const toast = useToast();

  const ToastDetails = [
    {
      title: "Account verified",
      variant: "solid",
      description: "Thanks for signing up with us.",
      isClosable: true,
    },
    {
      title: "Something went wrong",
      variant: "subtle",
      description: "Please create a support ticket from the support page",
    },
    {
      title: "Network connection restored",
      variant: "left-accent",
      description:
        "This is to inform you that your network connectivity is restored",
      isClosable: true,
    },
    {
      title: "Invalid email address",
      variant: "top-accent",
      description: "Please enter a valid email address",
    },
    {
      title: "Invalid email address",
      variant: "outline",
      description: "Please enter a valid email address",
    },
  ];

  return (
    <>
      {alertInfo.isShow &&
        toast.show({
          render: () => {
            return <ToastAlert {...alertInfo} />;
          },
        })}
      {alertInfo.isShow && alert({ type: "CLOSE_ALERT" })}
    </>
  );
};

const ToastAlert = ({
  id,
  status,
  variant,
  title,
  description,
  isClosable,
  ...rest
}) => (
  <Alert
    width={{ base: "90%", md: "80%" }}
    alignSelf="center"
    flexDirection="row"
    status={status ? status : "info"}
    variant={variant}
    {...rest}
  >
    <VStack space={1} flexShrink={1} w="100%">
      <HStack flexShrink={1} alignItems="center" justifyContent="space-between">
        <HStack space={2} flexShrink={1} alignItems="center">
          <Alert.Icon />
          <Text
            fontSize="md"
            fontWeight="medium"
            flexShrink={1}
            color={
              variant === "solid"
                ? "lightText"
                : variant !== "outline"
                ? "darkText"
                : null
            }
          >
            {String(title)}
          </Text>
        </HStack>
        {isClosable ? (
          <IconButton
            variant="unstyled"
            icon={<CloseIcon size="3" />}
            _icon={{
              color: variant === "solid" ? "lightText" : "darkText",
            }}
            onPress={() => toast.close(id)}
          />
        ) : null}
      </HStack>
      <Text
        px="6"
        color={
          variant === "solid"
            ? "lightText"
            : variant !== "outline"
            ? "darkText"
            : null
        }
      >
        {String(description)}
      </Text>
    </VStack>
  </Alert>
);

const mapStateToProps = (state) => ({
  alertInfo: state.alertReducer,
});

const mapDispatchToProps = (dispatch) => ({
  alert: ({ type, body }) => dispatch(alert({ type, body })),
});

export default connect(mapStateToProps, mapDispatchToProps)(GlobalAlert);
