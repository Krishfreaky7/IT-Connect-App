import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from "react-native";
// import Showroomlist from "../Showroomlist";
import Home from './Home';
import Storelive from '../Storelive';

const cardData = [
    {
        cardhead: "TN-COVAI-RS PURAM-LIVE",
        dob: "DOB :",
        date: "13-05-2015",
        asm: "ASM :",
        name: "Sudalai Mani M",
        total: "Total :",
        totalno: 26,
        active: "Active :",
        activeno: 24,
        expired: "Expired :",
        expiredno: 1,
        empty: "Empty :",
        emptyno: 1
    },
    {
        cardhead: "TN-COVAI-RS PURAM-LIVE",
        dob: "DOB :",
        date: "13-05-2015",
        asm: "ASM :",
        name: "Sudalai Mani M",
        total: "Total :",
        totalno: 26,
        active: "Active :",
        activeno: 24,
        expired: "Expired :",
        expiredno: 1,
        empty: "Empty :",
        emptyno: 1
    },
    {
        cardhead: "TN-COVAI-RS PURAM-LIVE",
        dob: "DOB :",
        date: "13-05-2015",
        asm: "ASM :",
        name: "Sudalai Mani M",
        total: "Total :",
        totalno: 26,
        active: "Active :",
        activeno: 24,
        expired: "Expired :",
        expiredno: 1,
        empty: "Empty :",
        emptyno: 1
    },
    {
        cardhead: "TN-COVAI-RS PURAM-LIVE",
        dob: "DOB :",
        date: "13-05-2015",
        asm: "ASM :",
        name: "Sudalai Mani M",
        total: "Total :",
        totalno: 26,
        active: "Active :",
        activeno: 24,
        expired: "Expired :",
        expiredno: 1,
        empty: "Empty :",
        emptyno: 1
    },
    {
        cardhead: "TN-COVAI-RS PURAM-LIVE",
        dob: "DOB :",
        date: "13-05-2015",
        asm: "ASM :",
        name: "Sudalai Mani M",
        total: "Total :",
        totalno: 26,
        active: "Active :",
        activeno: 24,
        expired: "Expired :",
        expiredno: 1,
        empty: "Empty :",
        emptyno: 1
    },
    {
        cardhead: "TN-COVAI-RS PURAM-LIVE",
        dob: "DOB :",
        date: "13-05-2015",
        asm: "ASM :",
        name: "Sudalai Mani M",
        total: "Total :",
        totalno: 26,
        active: "Active :",
        activeno: 24,
        expired: "Expired :",
        expiredno: 1,
        empty: "Empty :",
        emptyno: 1
    }
]

const listData = [
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


const ListView = ({navigation}) => {
    return (
        <ScrollView style={styles.fullscreen}>
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
                {listData.map((item, index) => {
                    return (
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <TouchableOpacity style={{ width: 145 }} >
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

    )
}

const Assetlist = ({ navigation }) => {
    const [text, onChangeNumber] = React.useState('');
    const [listViewVisible, setListViewVisible] = useState(false);

    const ChangeView = () => {
        setListViewVisible(!listViewVisible);
    }

    return (
        <>
            <ScrollView style={styles.fullscreen}>
            <View style={styles.header}>
                <View>
                    <TouchableOpacity style={{ alignItems: "center" }} onPress={() => navigation.navigate(Home)} >
                        <Image source={require("../../images/left-arrow.png")} style={{ width: 20, height: 22 }} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.headtext}>Store Wise Assets Status</Text>
                </View>
            </View>
                <View style={styles.Searchbar}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={text}
                        placeholder="Search Store name, Asset id"
                        placeholderTextColor={"#BEBEBE"}

                    />
                    {/* <TouchableOpacity style={styles.filterbutton} onPress={() => navigation.navigate(Assetlist)}>
                        <Text style={styles.filtertext}>Grid</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterbutton} onPress={() => navigation.navigate(Showroomlist)}>
                        <Text style={styles.filtertext}>List</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity style={styles.filterbutton} onPress={ChangeView}>
          <Text style={styles.filtertext}>{listViewVisible ? 'Grid' : 'List'}</Text>
        </TouchableOpacity>
                </View>
                {listViewVisible ? (
        <ListView navigation={navigation}/> // Render the ListView component
      ) : (
                <View style={styles.cardview}>
                    {cardData.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} style={styles.card} onPress={() => navigation.navigate(Storelive)}>
                                <View >
                                    <Text style={styles.headtext2}>{item.cardhead}</Text>
                                    {/* {INFORMATION ICON} */}
                                </View>
                                <View style={{ flexDirection: "row", marginVertical: 4 }}>
                                    <View style={{ flexDirection: "row", padding: 2 }}>
                                        <Text style={{ color: "#000" }}>{item.dob}</Text>
                                        <Text style={{ paddingHorizontal: 4, color: "#BEBEBE" }}>{item.date}</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", padding: 2 }}>
                                        <Text style={{ color: "#000" }}>{item.asm}</Text>
                                        <Text style={{ paddingHorizontal: 4, color: "#BEBEBE" }}>{item.name}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", marginVertical: 4, justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: "row", padding: 2 }}>
                                        <Text style={{ color: "#000" }}>{item.total}</Text>
                                        <Text style={{ paddingHorizontal: 4, color: "#B05800" }}>{item.totalno}</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", padding: 2 }}>
                                        <Text style={{ color: "#000" }}>{item.active}</Text>
                                        <Text style={{ paddingHorizontal: 4, color: "#1F7A48" }}>{item.activeno}</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", padding: 2 }}>
                                        <Text style={{ color: "#000" }}>{item.expired}</Text>
                                        <Text style={{ paddingHorizontal: 4, color: "#FF3B30" }}>{item.expiredno}</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", padding: 2 }}>
                                        <Text style={{ color: "#000" }}>{item.empty}</Text>
                                        <Text style={{ paddingHorizontal: 4, color: "#0F61FD" }}>{item.emptyno}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                 )}
            </ScrollView>
        </>
    )

}

const styles = StyleSheet.create({
    fullscreen: {
        flex: 1,
        color: "#BEBEBE"
    },
    header: {
        padding: 15,
        backgroundColor: "#1c1c1c",
        elevation: 5,
        // height: 10
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 1,
        flexDirection: "row"
    },
    headtext: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#fff",
        marginLeft: 10
    },
    Searchbar: {
        padding: 10,
        backgroundColor: "#FFF3EA",
        width: "100%",
        elevation: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    input: {
        height: 35,
        width: "85%",
        margin: 5,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        borderColor: "#C4C4C4",
        backgroundColor: "#fff",
    color: "#BEBEBE",
    fontWeight: "400"
    },
    filterbutton: {
        height: 30,
        margin: 5,
        borderWidth: 1,
        padding: 5,
        borderRadius: 5,
        borderColor: "#C4C4C4",
        backgroundColor: "#fff",
        justifyContent: "center",
        color: "#000",
    fontWeight: "400"
    },
    filtertext: {
        fontSize: 10,
        color: "#BEBEBE"
    },
    cardview: {
        marginVertical: 15,
        marginHorizontal: 10
    },
    card: {
        borderWidth: 1,
        borderColor: "#BEBEBE",
        borderRadius: 10,
        elevation: 5,
        marginHorizontal: 5,
        marginVertical: 5,
        padding: 15,
        backgroundColor: "#fff"
    },
    headtext2: {
        fontSize: 15,
        color: "#FB6C00",
        padding: 1,
        marginVertical: 4,
    },
    subtext1: {
        flexDirection: 'row'
    },
    tableview: {
        marginVertical: 25,
        marginHorizontal: 15,
        backgroundColor: "#fff"
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
})

export default Assetlist;