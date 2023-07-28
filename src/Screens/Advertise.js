import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import Dropdata from "./Dropdata";


const data = [
    {
        name: "Name Board"
    },
    {
        name: "Side Board"
    },
    {
        name: "Backlit Pillar 1"
    },
    {
        name: "Inshop"
    },
    {
        name: "Wall Branding 1"
    },
    {
        name: "Name Board"
    },
    {
        name: "Side Board"
    },
    {
        name: "Backlit Pillar 1"
    },
    {
        name: "Inshop"
    },
    {
        name: "Wall Branding 1"
    },
]

const Advertise = (props) => {
    console.log("The image is passing ", props.route.params)

    const [ValueConvertion, setValueConvertion] = useState("cm");
    const [DropValue, setDropValue] = useState("Select item");
    const [DropValue2, setDropValue2] = useState("Select item");
    const [DropValue3, setDropValue3] = useState("Select item");
    const [isClicked, setisClicked] = useState(false);
    const [isClicked2, setisClicked2] = useState(false);
    const [isClicked3, setisClicked3] = useState(false);
    const [datas, setDatas] = useState(data);
    const Convertion = () => {
        if (ValueConvertion === "cm") {
            setValueConvertion("in");
            
        }
        else {
            setValueConvertion("cm")
        }
    }

    // const onSearch = txt => {
    //     let tempData = datas.filter(item => {
    //         return item.name.toLowerCase().indexOf(txt.toLowerCase()) > -1;
    //     });
    //     setDatas(tempData);
    // }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headtext}>Add Advertisement</Text>
            </View>
            <ScrollView style={styles.scrollview}>

            <View style={styles.imgback}>
                <View style={{ marginHorizontal: 5 }}>
                    {/* <Text style={{ color: "#000" }} > {JSON.stringify(props.route.params)}</Text> */}
                    <Text style={{ color: "#000", paddingVertical: 5 }}>Asset Image</Text>
                    <View style={{ width: "100%" }}>
                        {/* <Image source={{ uri: props.route.params }} style={{ aspectRatio: 1 }} /> */}
                        <Image source={require("../images/Showroom1x.png")} style={{ width: "100%" }} />
                    </View>
                    <View style={{ marginVertical: 5, flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ margin: 5 }}>
                            <Text style={{ color: "#000", fontWeight: "bold" }}>Width</Text>
                            <View style={{ flexDirection: "row" }}>
                                <TextInput style={styles.input} placeholder="1000"></TextInput>
                                <TouchableOpacity onPress={Convertion} style={styles.button}>
                                    <Text style={styles.input2}>{ValueConvertion}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ margin: 5 }}>
                            <Text style={{ color: "#000", fontWeight: "bold" }}>Height</Text>
                            <View style={{ flexDirection: "row" }}>
                                <TextInput style={styles.input} placeholder="1000"></TextInput>
                                <TouchableOpacity onPress={Convertion} style={styles.button}>
                                    <Text style={styles.input2}>{ValueConvertion}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ margin: 5 }}>
                            <Text style={{ color: "#000", opacity: 0 }}>Height</Text>
                            <View style={{ flexDirection: "row" }}>
                                <TextInput style={styles.input3} placeholder="Depth (Optional)"></TextInput>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={{ margin: 5 }}>
                            <Text style={{ color: "#000", fontWeight: "bold" }}>Branding Type</Text>
                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity onPress={() => {
                                    setisClicked(!isClicked);
                                }} style={styles.drop}>
                                    <Text style={styles.droptext}>{DropValue}</Text>
                                    {isClicked ? (
                                        <Image source={require("../images/down-arrow.png")} style={{ width: 20, height: 20, margin: 5 }} />
                                    ) : (
                                        <Image source={require("../images/up-arrow.png")} style={{ width: 20, height: 20, margin: 5 }} />
                                    )}
                                </TouchableOpacity>
                            </View>
                            {isClicked ? ( 
                                <View style={styles.dropdownArea}>
                                    <FlatList data={data} renderItem={({ item, index }) => {
                                        return (
                                            <TouchableOpacity onPress={() => {
                                                setDropValue(item.name);
                                                setisClicked(false);
                                            }} style={styles.boardingItem}>
                                                <Text>{item.name}</Text>
                                            </TouchableOpacity>
                                        )
                                    }} />
                                </View>
                            ) : null}

                        </View>
                        <View style={{ margin: 5 }}>
                            <Text style={{ color: "#000", fontWeight: "bold" }}>Branding Location</Text>
                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity onPress={() => {
                                    setisClicked2(!isClicked2);
                                }} style={styles.drop}>
                                    <Text style={styles.droptext}>{DropValue2}</Text>
                                    {isClicked2 ? (
                                        <Image source={require("../images/down-arrow.png")} style={{ width: 20, height: 20, margin: 5 }} />
                                    ) : (
                                        <Image source={require("../images/up-arrow.png")} style={{ width: 20, height: 20, margin: 5 }} />
                                    )}
                                </TouchableOpacity>
                            </View>
                            {isClicked2 ? (
                                <View style={styles.dropdownArea}>
                                    <FlatList data={data} renderItem={({ item, index }) => {
                                        return (
                                            <TouchableOpacity onPress={() => {
                                                setDropValue2(item.name);
                                                setisClicked2(false);
                                            }} style={styles.boardingItem}>
                                                <Text>{item.name}</Text>
                                            </TouchableOpacity>
                                        )
                                    }} />
                                </View>
                            ) : null}

                        </View>
                        <View style={{ margin: 5 }}>
                            <Text style={{ color: "#000", fontWeight: "bold" }}>Material</Text>
                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity onPress={() => {
                                    setisClicked3(!isClicked3);
                                }} style={styles.drop}>
                                    <Text style={styles.droptext}>{DropValue3}</Text>
                                    {isClicked3 ? (
                                        <Image source={require("../images/down-arrow.png")} style={{ width: 20, height: 20, margin: 5 }} />
                                    ) : (
                                        <Image source={require("../images/up-arrow.png")} style={{ width: 20, height: 20, margin: 5 }} />
                                    )}
                                </TouchableOpacity>
                            </View>
                            {isClicked3 ? (
                                <View style={styles.dropdownArea}>
                                    <FlatList data={data} renderItem={({ item, index }) => {
                                        return (
                                            <TouchableOpacity onPress={() => {
                                                setDropValue3(item.name);
                                                setisClicked3(false);
                                            }} style={styles.boardingItem}>
                                                <Text>{item.name}</Text>
                                            </TouchableOpacity>
                                        )
                                    }} />
                                </View>
                            ) : null}

                        </View>
                    </View>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollview: {
        flex: 1
    },
    header: {
        padding: 15,
        backgroundColor: "#1c1c1c",
        elevation: 5,
        // height: 10
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 1
    },
    headtext: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#fff",
        marginLeft: 10
    },
    imgback: {
        padding: 10
    },
    input: {
        height: 35,
        width: 55,
        margin: 1,
        borderWidth: 1,
        padding: 5,
        borderRadius: 5,
        borderBottomColor: '#000',
        borderLeftColor: "#fff",
        borderRightColor: "#fff",
        borderTopColor: "#fff",
        // borderColor: "#000"
        // backgroundColor: '#fff',
        marginRight: 2
    },
    input2: {
        padding: 5,
        margin: 2,
        color: "#FB6C00",
        textAlign: "center",
        fontWeight: "bold"
    },
    input3: {
        height: 35,
        width: 120,
        margin: 1,
        borderWidth: 1,
        padding: 5,
        borderRadius: 5,
        borderBottomColor: '#000',
        borderLeftColor: "#fff",
        borderRightColor: "#fff",
        borderTopColor: "#fff",
        // borderColor: "#000"
        // backgroundColor: '#fff',
    },
    button: {
        borderColor: "#FB6C00",
        borderRadius: 10,
        // backgroundColor: "#fff",
        width: 50,
        borderWidth: 1,
        height: 35
    },
    drop: {
        borderColor: "#3B3B3B",
        borderWidth: 1,
        borderRadius: 7,
        width: "100%",
        height: 40,
        marginVertical: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },
    droptext: {
        padding: 5,
        margin: 2,
        color: "#B5B5B5",
        fontWeight: "bold"
    },
    dropdownArea: {
        width: "100%",
        height: 210,
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: "#fff",
        elevation: 5,
        alignSelf: "center"
    },
    searchInput: {
        width: "90%",
        height: 40,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: "#8e8e8e",
        alignSelf: "center",
        marginTop: 20,
        paddingLeft: 15
    },
    boardingItem: {
        width: "85%",
        height: 40,
        borderBottomWidth: 0.2,
        borderBottomColor: "#8e8e8e",
        alignSelf: "center",
        justifyContent: "center",
        flex: 1
    }
})

export default Advertise;