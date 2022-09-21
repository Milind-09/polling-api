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
  let { apiData, prevPage, pageNext,detailData }: any = useContext(PollingContext);
  function newScreen() {
    navigation.navigate('Details')
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={prevPage}>
          <Text style={styles.numPad}>Previous</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={pageNext}>
          <Text style={styles.numPad}>Next</Text>
        </TouchableOpacity>
      </View>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title ><Text style={styles.heading}>Title</Text></DataTable.Title>
          <DataTable.Title> <Text style={styles.heading}>Url</Text> </DataTable.Title>
          <DataTable.Title> <Text style={styles.heading}>Created_At</Text> </DataTable.Title>
          <DataTable.Title> <Text style={styles.heading}>Author</Text> </DataTable.Title>
        </DataTable.Header>
        <View >
          
          <FlatList
            data={apiData}
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
  heading:{
    fontSize:20,
    fontWeight:"bold",
  }
 
 
});
