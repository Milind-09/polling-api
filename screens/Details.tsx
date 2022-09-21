import React from "react";
import { Text, View } from "react-native";
import PollingContext from "../context/PollingContext";

function Details() {
  let { showRawData }: any = React.useContext(PollingContext);
  let jsonVar = { showRawData };
  let jsonStr = JSON.stringify(jsonVar);
  return (
    <View>
      <Text>Details</Text>
      <Text>{jsonStr}</Text>
    </View>
  );
}

export default Details;
