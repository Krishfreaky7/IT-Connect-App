import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import Storelive from './Storelive';
import Assetlist from './Home/Assetlist';

const Data = [
  {
    showroom: 'TN-COVAI-RS PURAM-LIVE',
    totalno: 16,
    activeno: 16,
    expiredno: 0,
    emptyno: 0,
  },
  {
    showroom: 'TN-COVAI-UKKADAM',
    totalno: 28,
    activeno: 23,
    expiredno: 4,
    emptyno: 1,
  },
  {
    showroom: 'TN-COVAI-RS PURAM-LIVE',
    totalno: 26,
    activeno: 24,
    expiredno: 1,
    emptyno: 1,
  },
  {
    showroom: 'TN-COVAI-UKKADAM',
    totalno: 28,
    activeno: 23,
    expiredno: 4,
    emptyno: 1,
  },
  {
    showroom: 'TN-COVAI-RS PURAM-LIVE',
    totalno: 16,
    activeno: 16,
    expiredno: 0,
    emptyno: 0,
  },
  {
    showroom: 'TN-COVAI-UKKADAM',
    totalno: 28,
    activeno: 23,
    expiredno: 4,
    emptyno: 1,
  },
  {
    showroom: 'TN-COVAI-RS PURAM-LIVE',
    totalno: 26,
    activeno: 24,
    expiredno: 1,
    emptyno: 1,
  },
  {
    showroom: 'TN-COVAI-UKKADAM',
    totalno: 28,
    activeno: 23,
    expiredno: 4,
    emptyno: 1,
  },
  {
    showroom: 'TN-COVAI-RS PURAM-LIVE',
    totalno: 26,
    activeno: 24,
    expiredno: 1,
    emptyno: 1,
  },
  {
    showroom: 'TN-COVAI-UKKADAM',
    totalno: 28,
    activeno: 23,
    expiredno: 4,
    emptyno: 1,
  },
  {
    showroom: 'TN-COVAI-RS PURAM-LIVE',
    totalno: 26,
    activeno: 24,
    expiredno: 1,
    emptyno: 1,
  },
  {
    showroom: 'TN-COVAI-UKKADAM',
    totalno: 28,
    activeno: 23,
    expiredno: 4,
    emptyno: 1,
  },
  {
    showroom: 'TN-COVAI-RS PURAM-LIVE',
    totalno: 26,
    activeno: 24,
    expiredno: 1,
    emptyno: 1,
  },
  {
    showroom: 'TN-COVAI-UKKADAM',
    totalno: 28,
    activeno: 23,
    expiredno: 4,
    emptyno: 1,
  },
  {
    showroom: 'TN-COVAI-RS PURAM-LIVE',
    totalno: 26,
    activeno: 24,
    expiredno: 1,
    emptyno: 1,
  },
  {
    showroom: 'TN-COVAI-UKKADAM',
    totalno: 28,
    activeno: 23,
    expiredno: 4,
    emptyno: 1,
  },
  {
    showroom: 'TN-COVAI-RS PURAM-LIVE',
    totalno: 26,
    activeno: 24,
    expiredno: 1,
    emptyno: 1,
  },
  {
    showroom: 'TN-COVAI-UKKADAM',
    totalno: 28,
    activeno: 23,
    expiredno: 4,
    emptyno: 1,
  },
];

const Showroomlist = ({ navigation }) => {
  const [text, onChangeNumber] = React.useState('');
  return (
    <>
      <ScrollView style={styles.fullscreen}>
        <View style={styles.header}>
          <Text style={styles.headtext}>Store Wise Assets Status </Text>
        </View>
        <View style={styles.Searchbar}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={text}
            placeholder="Search Store name, Asset id"
          />
            <TouchableOpacity style={styles.filterbutton} onPress={() => navigation.navigate(Assetlist)}>
                    <Text style={styles.filtertext}>Grid</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterbutton} onPress={() => navigation.navigate(Showroomlist)}>
                    <Text style={styles.filtertext}>List</Text>
                </TouchableOpacity>
        </View>

        <View style={styles.tableview}>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View style={{ width: 145 }}>
              <Text style={[styles.tablehead, styles.tableshow]}>Showroom</Text>
            </View>
            <View style={{ width: 50 }}>
              <Text style={styles.tablehead}>Total</Text>
            </View>
            <View style={{ width: 60 }}>
              <Text style={styles.tablehead}>Active</Text>
            </View>
            <View style={{ width: 60 }}>
              <Text style={styles.tablehead}>Expired</Text>
            </View>
            <View style={{ width: 60 }}>
              <Text style={styles.tablehead}>Empty</Text>
            </View>
          </View>
          {Data.map((item, index) => {
            return (
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity style={{ width: 145 }}>
                  <Text
                    onPress={() => navigation.navigate(Storelive)}
                    style={[styles.tablehead, styles.tablesubhead, styles.blue]}>
                    {item.showroom}
                  </Text>
                </TouchableOpacity>
                <View style={{ width: 50 }}>
                  <Text
                    style={[
                      styles.tablehead,
                      styles.tablesubhead,
                      styles.right,
                    ]}>
                    {item.totalno}
                  </Text>
                </View>
                <View style={{ width: 60 }}>
                  <Text
                    style={[
                      styles.tablehead,
                      styles.tablesubhead,
                      styles.right,
                    ]}>
                    {item.activeno}
                  </Text>
                </View>
                <View style={{ width: 60 }}>
                  <Text
                    style={[
                      styles.tablehead,
                      styles.tablesubhead,
                      styles.right,
                    ]}>
                    {item.expiredno}
                  </Text>
                </View>
                <View style={{ width: 60 }}>
                  <Text
                    style={[
                      styles.tablehead,
                      styles.tablesubhead,
                      styles.right,
                    ]}>
                    {item.emptyno}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    height: '100%',
  },
  header: {
    padding: 15,
    backgroundColor: '#1c1c1c',
    elevation: 5,
    // height: 10
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
  },
  headtext: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
  Searchbar: {
    padding: 10,
    backgroundColor: '#FFF3EA',
    flexDirection: "row",
    // width: "100%",
    elevation: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
  },
  input: {
    height: 35,
    width: "75%",
    margin: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#C4C4C4',
    backgroundColor: '#fff',
    color: "#BEBEBE"
  },
  filterbutton: {
    height: 30,
    margin: 5,
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    borderColor: "#C4C4C4",
    backgroundColor: "#fff",
    justifyContent: "center"

},
filtertext: {
    fontSize: 10
},
  tableview: {
    marginVertical: 25,
    marginHorizontal: 15,
  },
  tablehead: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#141414',
    padding: 7,
    borderWidth: 1,
    borderColor: '#707070',
    textAlign: 'left',
  },
  tablesubhead: {
    fontSize: 10,
  },
  right: {
    textAlign: 'right',
  },
  blue: {
    color: "#319dc3"
  }
});

export default Showroomlist;