import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,

} from "react-native";
import PollingContext from "../context/PollingContext";
import { DataTable } from "react-native-paper";
function Home({navigation}:any) {
  let { pollingData, prevPage, pageNext,detailData }: any = useContext(PollingContext);
  function newScreen() {
    navigation.navigate('Details')
  }
  
  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Title</DataTable.Title>
          <DataTable.Title>Url</DataTable.Title>
          <DataTable.Title>Created_At</DataTable.Title>
          <DataTable.Title>Author</DataTable.Title>
        </DataTable.Header>
        <View >
          <FlatList
            data={pollingData.slice(1)}
            renderItem={(ele) => {
              let { objectID, title, url, created_at, author } = ele.item;

              return (
                <View key={objectID} >
                  <TouchableOpacity onPress={() =>{
                    newScreen(),detailData(objectID)
                  } }>
                    <DataTable.Row>
                      <DataTable.Cell>{title}</DataTable.Cell>
                      <DataTable.Cell>{url}</DataTable.Cell>
                      <DataTable.Cell>{created_at}</DataTable.Cell>
                      <DataTable.Cell>{author}</DataTable.Cell>
                    </DataTable.Row>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      </DataTable>

      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={prevPage}>
          <Text style={styles.numPad}>Previous</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={pageNext}>
          <Text style={styles.numPad}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Home;
const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 30,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  numPad: {
    padding: 10,
  },
 
 
});
