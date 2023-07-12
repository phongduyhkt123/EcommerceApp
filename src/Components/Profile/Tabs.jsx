import React, { useState } from "react";
import { useWindowDimensions } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import Profile from "./Profile";
import Orders from "./Orders";
import DeliveryAddress from "./DeliveryAddress";
import { StyleSheet } from "react-native";
import Colors from "../../color";
import { Text } from "native-base";

const renderScene = SceneMap({
  first: Profile,
  second: Orders,
  third: DeliveryAddress,
});

const Tabs = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "PROFILE" },
    { key: "second", title: "ORDER" },
    { key: "third", title: "ADDRESS" },
  ]);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "white" }}
      tabStyle={style.tabStyle}
      activeColor={Colors.main}
      inactiveColor={Colors.white}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ color, margin: 8 }}>{route.title}</Text>
      )}
    />
  );
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />
  );
};

const style = StyleSheet.create({
  tabStyle: {
    backgroundColor: Colors.black,
  },
  text: {
    fontSize: 13,
    fontWeight: "bold",
  },
});

export default Tabs;
