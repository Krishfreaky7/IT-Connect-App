import React from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Storedetails from "./StoreDetails";
import Assetlist from "./Home/Assetlist";

const ShowroomData = [
    {
        img: require('../images/showroom1.png'),
        imgsize: '160" x 92"',
        title: "Wall Branding 2",
        titleid: "(11795)",
        statusimg: require('../images/Status1.png'),
        location: "Location",
        locationname: "Entry Left",
        material: "Material",
        materialname: "Vinyl With Sunboard",
        brand: "Brand",
        brandname: "Vivo",
        model: "Model",
        modelname: "V27 / Y100"
    },
    {
        img: require('../images/showroom2.png'),
        imgsize: '160" x 92"',
        title: "Name Board",
        titleid: "(11786)",
        statusimg: require('../images/Status2.png'),
        location: "Location",
        locationname: "Outside Entrance",
        material: "Material",
        materialname: "LED - Mono",
        brand: "Brand",
        brandname: "Vivo",
        model: "Model",
        modelname: "Poorvika"
    },
   {
        img: require('../images/showroom1.png'),
        imgsize: '160" x 92"',
        title: "Wall Branding 2",
        titleid: "(11795)",
        statusimg: require('../images/Status1.png'),
        location: "Location",
        locationname: "Entry Left",
        material: "Material",
        materialname: "Vinyl With Sunboard",
        brand: "Brand",
        brandname: "Vivo",
        model: "Model",
        modelname: "V27 / Y100"
    },
    {
        img: require('../images/showroom2.png'),
        imgsize: '160" x 92"',
        title: "Wall Branding 2",
        titleid: "(11786)",
        statusimg: require('../images/Status2.png'),
        location: "Location",
        locationname: "Outside Entrance",
        material: "Material",
        materialname: "LED - Mono",
        brand: "Brand",
        brandname: "Vivo",
        model: "Model",
        modelname: "Poorvika"
    },
]

const Storelive = ({ navigation }) => {

    const [text, onChangeNumber] = React.useState('');

    return (
        <View style={styles.fullscreen}>
            <View style={styles.header}>
                <View>
                    <TouchableOpacity style={{ alignItems: "center" }} onPress={() => navigation.navigate(Assetlist)} >
                        <Image source={require("../images/left-arrow.png")} style={{ width: 20, height: 22 }} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.headtext}>TN-COVAI-RS PURAM-LIVE</Text>
                </View>
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
                        <Text style={styles.boxpara}>15</Text>
                    </View>
                    <View style={styles.statusbox}>
                        <Text style={[styles.boxhead, styles.green]}>Active:</Text>
                        <Text style={styles.boxpara}>16</Text>
                    </View>
                    <View style={styles.statusbox}>
                        <Text style={[styles.boxhead, styles.red]}>Expired:</Text>
                        <Text style={styles.boxpara}>2</Text>
                    </View>
                    <View style={styles.statusbox}>
                        <Text style={[styles.boxhead, styles.red]}>Empty:</Text>
                        <Text style={styles.boxpara}>0</Text>
                    </View>
                </View>
            </View>
            <ScrollView style={styles.cardview}>
                {ShowroomData.map((item, index) => {
                    return (
                        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(Storedetails)}>
                            <View>
                                <Image source={item.img} style={styles.img} />
                                <Text style={styles.size}>{item.imgsize}</Text>
                            </View>
                            <View style={{ paddingLeft: 10 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={styles.texthead}>{item.title}</Text>
                                    <Text style={styles.subtext}>{item.titleid}</Text>
                                </View>
                                <View style={{ marginVertical: 4 }}>
                                    <Image source={item.statusimg} />
                                </View>
                                <View style={{ flexDirection: "row", marginVertical: 4 }}>
                                    <Text style={styles.subtexthead}>{item.location}</Text>
                                    <Text style={styles.subtext}>{item.locationname}</Text>
                                </View>
                                <View style={{ flexDirection: "row", marginVertical: 4 }}>
                                    <Text style={styles.subtexthead}>{item.material}</Text>
                                    <Text style={styles.subtext}>{item.materialname}</Text>
                                </View>
                                <View style={{ flexDirection: "row", marginVertical: 4 }}>
                                    <Text style={styles.subtexthead}>{item.brand}</Text>
                                    <Text style={styles.subtext}>{item.brandname}</Text>
                                </View>
                                <View style={{ flexDirection: "row", marginVertical: 4 }}>
                                    <Text style={styles.subtexthead}>{item.model}</Text>
                                    <Text style={styles.subtext}>{item.modelname}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                })}


            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    fullscreen: {
        flex: 1,
        height: "100%",
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
        // flexDirection: "row",
        // justifyContent: "center", 
        // alignItems: "center",
        // width: "100%",
        elevation: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
    },
    input: {
        height: 35,
        // width: 100,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        borderColor: "#C4C4C4",
        backgroundColor: "#fff",
    },
    Statusbar: {
        marginTop: 7,
        padding: 10,
        backgroundColor: "#fff9f4",
        // flexDirection: "row",
        // justifyContent: "center", 
        // alignItems: "center",
        elevation: 1,
        shadowColor: "#000",
        // shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
    },
    Status: {
        flexDirection: "row"
    },
    statushead: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#000"
    },
    statusbox: {
        borderWidth: 1,
        borderColor: "#C4C4C4",
        padding: 3,
        flexDirection: "row",
        backgroundColor: "#fff",
        marginVertical: 10,
        marginHorizontal: 5
    },
    boxhead: {
        color: "#b25c07",
        padding: 2
    },
    boxpara: {
        color: "#000",
        padding: 2,
        fontWeight: "bold"
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
        backgroundColor: "#fff",
        flexDirection: "row"
    },
    texthead: {
        textAlign: "center",
        color: "#FB6C00",
        fontWeight: "bold",
        fontSize: 13
    },
    subtexthead: {
        fontSize: 12,
        paddingLeft: 5,
        // fontWeight: "bold",
        color: "#000000",
    },
    subtext: {
        fontSize: 12,
        paddingLeft: 5,
        // fontWeight: "bold",
        color: "#00000066"
    },
    img: {
        borderTopEndRadius: 5,
        padding: 5,
        width: 120,
        height: 100,

    },
    green: {
        color: "green"
    },
    red: {
        color: "red"
    },
    size: {
        marginVertical: 5,
        fontSize: 14,
        textAlign: "center"
    }
})

export default Storelive;