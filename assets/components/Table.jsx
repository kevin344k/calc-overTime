/*import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
} from "react-native";

const Table = () => {
  return (
    <View style={styles.container}>


        <SafeAreaView>
      <FlatList  data=
        {[
          { key: "Devin" },
          { key: "1" },
          { key: "2" },
          { key: "3" },
          { key: "4" },
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        >
       
      </FlatList>
      </SafeAreaView>
    </View>
  );
};
export default Table;

const styles = StyleSheet.create({
  container: {},
});
*/

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

export default class ExampleTwo extends Component {



  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['%', 'Días', 'x Horas', 'H. Jornada','Total'],
      tableTitle: ['Noche al 100', 'Dia al 50', 'Noche al 50', 'Noche al 25'],
      tableData: [
        ['9', 'x2 horas', '2.75',"24.75"],
        ['10', 'x1.5 horas', '4',"40"],
        ['9', 'x1.5 horas', '1.25',"11.25"],
        ['9', 'x0.25 horas', '8',"72"]
      ]
    }
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1}}>
          <Row data={state.tableHead} flexArr={[1, 1, 1, 1]}  style={styles.head} textStyle={styles.text}/>
          <TableWrapper style={styles.wrapper}>
            <Col data={state.tableTitle} style={styles.title} heightArr={[40,40,40,40]} textStyle={styles.text}/>
            <Rows data={state.tableData} flexArr={[1, 1, 1,1]} heightArr={[40,40,40,40]} style={styles.row} textStyle={styles.text}/>
          </TableWrapper>
        </Table>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container: { flex: 1, width:"100%",backgroundColor:"white",marginTop:16,},
    head: {  height: 40,  backgroundColor: '#f1f8ff'  },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: {  height: 40  },
    text: { textAlign: 'center' }
  });