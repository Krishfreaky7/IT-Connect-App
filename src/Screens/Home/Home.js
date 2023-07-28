import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Assetlist from './Assetlist';

const HomeData = [
  {
    img: require('../../images/visit.png'),
    cardtext: 'Asset list',
  },
  {
    img: require('../../images/visit.png'),
    cardtext: 'Visit',
  },
  {
    img: require('../../images/visit.png'),
    cardtext: 'Tickets',
  },
  {
    img: require('../../images/visit.png'),
    cardtext: 'Installations',
  },
];

const Home = ({navigation}) => {
  const [text, onChangeNumber] = React.useState('');

  return (
    <View style={styles.fullscreen}>
      <View style={styles.header}>
        <Text style={styles.headtext}>Poorvika</Text>
      </View>
      <View style={styles.Searchbar}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={text}
          placeholder="Search Store name, Asset id"
        />
        {/* <Feather name='search' style={{ fontSize: 20 }} /> */}
      </View>
      <View style={styles.Statusbar}>
        <Text style={styles.statushead}>Marketing Asset Status</Text>
        <View style={styles.Status}>
          <View style={styles.statusbox}>
            <Text style={styles.boxhead}>Total:</Text>
            <Text style={styles.boxpara}>9383</Text>
          </View>
          <View style={styles.statusbox}>
            <Text style={[styles.boxhead, styles.green]}>Active:</Text>
            <Text style={styles.boxpara}>9383</Text>
          </View>
          <View style={styles.statusbox}>
            <Text style={[styles.boxhead, styles.red]}>Expired:</Text>
            <Text style={styles.boxpara}>2053</Text>
          </View>
          <View style={styles.statusbox}>
            <Text style={[styles.boxhead, styles.red]}>Empty:</Text>
            <Text style={styles.boxpara}>487</Text>
          </View>
        </View>
      </View>
      {/* <View style={styles.cardview}>
                {HomeData.map((item, index) => {
                    return (
                        <View style={{flexBasis: "35%"}}>
                        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(Store)}>
                            <Image source={(item.img)} style={styles.img} />
                            <Text style={styles.cardtext}>Asset List</Text>
                        </TouchableOpacity>
                        </View>
                    )
                })}
            </View> */}

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignContent: 'center',
        }}>
        {HomeData.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                height: 100,
                flexBasis: '32%',
                marginHorizontal: 2,
                marginVertical: 20,
              }}>
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate(Assetlist)}>
                <Image source={item.img} style={styles.img} />
                <Text style={styles.cardtext}>{item.cardtext}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
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
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 1,
  },
  headtext: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FB6C00',
    textAlign: 'center',
  },
  Searchbar: {
    padding: 10,
    backgroundColor: '#FFF3EA',
    // flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
    // width: "100%",
    elevation: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
  },
  input: {
    height: 35,
    // width: 100,
    margin: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#C4C4C4',
    backgroundColor: '#fff',
  },
  Statusbar: {
    marginTop: 7,
    padding: 10,
    backgroundColor: '#fff9f4',
    // flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
    elevation: 1,
    shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
  },
  Status: {
    flexDirection: 'row',
  },
  statushead: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  statusbox: {
    borderWidth: 1,
    borderColor: '#C4C4C4',
    padding: 3,
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 2,
  },
  boxhead: {
    color: '#b25c07',
    padding: 2,
  },
  boxpara: {
    color: '#000',
    padding: 2,
    fontWeight: 'bold',
  },
  cardview: {
    padding: 15,
    flexDirection: 'row',
    // flexWrap: "wrap",
    // alignItems: "center",
    // justifyContent: "center",
    flex: 1,
  },
  card: {
    borderWidth: 2,
    borderRadius: 5,
    // height: "100%",
    marginHorizontal: 10,
    marginVertical: 5,
    // backgroundColor: "#000"
  },
  cardtext: {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#000',
    padding: 5,
    marginBottom: 0,
  },
  img: {
    borderTopEndRadius: 5,
    padding: 5,
    width: '100%',
    height: 90.5,
  },
  green: {
    color: 'green',
  },
  red: {
    color: 'red',
  },
});

export default Home;