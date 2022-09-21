import React from "react";
import { Text, View, StyleSheet } from "react-native";
import PollingContext from "../context/PollingContext";

function Details() {
  let { showRawData }: any = React.useContext(PollingContext);

  let jsonStr = JSON.stringify({ showRawData });
  return (
    <View>
      <Text style={styles.title}>Raw JSON</Text>
      <View style={styles.item}>
        <Text>{jsonStr}</Text>
      </View>
    </View>
  );
}

export default Details;
const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginLeft: 20,
  },
  item: {
    padding: 10,
  },
  title:{
    fontSize:20,
    marginTop:20,
    textAlign:"center"
  }
});
