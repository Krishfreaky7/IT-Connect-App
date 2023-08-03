import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import Dropdata from "./Dropdata";
// import File from './Newfile';
import Newfile from "./Newfile";
import Newfile2 from "./Newfile2";
import Newfile3 from "./Newfile3";
import Newfile4 from "./Newfile4";
import Newfile5 from "./Newfile5";
import Newfile6 from "./Newfile6";

import Storedetails from "./StoreDetails";
import Storelive from "./Storelive";


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

const data2 = [
    {
        name: "Outside Entrance Top"
    },
    {
        name: "Outside Entrance Left"
    },
    {
        name: "Entry Right"
    },
    {
        name: "Building Top Left"
    },
    {
        name: "Staircase Left"
    },
]

const data3 = [
    {
        name: "Vinyl with Signboard"
    },
    {
        name: "LED - Symphony"
    },
    {
        name: "3M Star Flex"
    },
    {
        name: "Acrylic"
    },
    {
        name: "Stainless Steel"
    },
]

const data4 = [
    {
        name: "Front Light"
    },
    {
        name: "Back Light"
    },
    {
        name: "Non Light"
    },
    {
        name: "Not Available"
    },
]

const data5 = [
    {
        name: "Item One"
    },
    {
        name: "Item Two"
    },
    {
        name: "Item Three"
    },
    {
        name: "Item Four"
    },
    {
        name: "Item Five"
    },
]

const data6 = [
    {
        name: "Active"
    },
    {
        name: "Expired"
    },
    {
        name: "Empty"
    },
    {
        name: "On Brand Escalation"
    },
    {
        name: "Damaged"
    },
]

const Advertise = ({props, navigation, route}) => {
    // console.log("The image is passing ", props.route.params)

    const [ValueConvertion, setValueConvertion] = useState("cm");
    const [DropValue, setDropValue] = useState("Select item");
    const [DropValue2, setDropValue2] = useState("Select item");    
    const [DropValue3, setDropValue3] = useState("Select item");
    const [DropValue4, setDropValue4] = useState("Select item");
    const [DropValue5, setDropValue5] = useState("Select item");
    const [DropValue6, setDropValue6] = useState("Select item");

    const [isClicked, setisClicked] = useState(false);
    const [isClicked2, setisClicked2] = useState(false);
    const [isClicked3, setisClicked3] = useState(false);
    const [isClicked4, setisClicked4] = useState(false);
    const [isClicked5, setisClicked5] = useState(false);
    const [isClicked6, setisClicked6] = useState(false);

    const [selectedRadio, setSelectedRadio] = useState(0);

    // const [datas, setDatas] = useState(data);
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
            <View>
                    <TouchableOpacity style={{ alignItems: "center" }} onPress={() => navigation.navigate(Storedetails)} >
                        <Image source={require("../images/left-arrow.png")} style={{ width: 20, height: 22 }} />
                    </TouchableOpacity>
                </View>
                <View>
                <Text style={styles.headtext}>Add Advertisement</Text>
                </View>
            </View>
            <ScrollView scrollEnabled={true} nestedScrollEnabled={true} style={styles.scrollview}>

            <View style={styles.imgback}>
                <View style={{ marginHorizontal: 5 }}>
                    {/* <Text style={{ color: "#000" }} > {JSON.stringify(props.route.params)}</Text> */}
                    <Text style={{ color: "#000", paddingVertical: 5, fontWeight: "bold" }}>Asset Image</Text>
                    <View style={{ width: "100%" }}>
                        {/* <Image source={{ uri: props.route.params }} style={{ aspectRatio: 1 }} /> */}
                        <Image source={require("../images/Showroom1x.png")} style={{ width: "100%" }} />
                    </View>
                    <View style={{ marginVertical: 5, flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ margin: 5 }}>
                            <Text style={{ color: "#000", fontWeight: "bold" }}>Width</Text>
                            <View style={{ flexDirection: "row" }}>
                                <TextInput style={styles.input} placeholder="1000" placeholderTextColor={"#BEBEBE"} value={Number}></TextInput>
                                <TouchableOpacity onPress={Convertion} style={styles.button}>
                                    <Text style={styles.input2}>{ValueConvertion}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ margin: 5 }}>
                            <Text style={{ color: "#000", fontWeight: "bold" }}>Height</Text>
                            <View style={{ flexDirection: "row" }}>
                                <TextInput style={styles.input} placeholder="1000" placeholderTextColor={"#BEBEBE"} value={Number}></TextInput>
                                <TouchableOpacity onPress={Convertion} style={styles.button}>
                                    <Text style={styles.input2}>{ValueConvertion}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ margin: 5 }}>
                            <Text style={{ color: "#000", opacity: 0 }}>Height</Text>
                            <View style={{ flexDirection: "row" }}>
                                <TextInput style={styles.input3} placeholder="Depth (Optional)" placeholderTextColor={"#BEBEBE"} value={Number} ></TextInput>
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
                                    <Text style={styles.droptext}>{DropValue}...</Text>
                                    {isClicked ? (
                                        <Image source={require("../images/down-arrow.png")} style={{ width: 20, height: 20, margin: 5 }} />
                                    ) : (
                                        <Image source={require("../images/up-arrow.png")} style={{ width: 20, height: 20, margin: 5 }} />
                                    )}
                                </TouchableOpacity>
                            </View>
                            {isClicked ? ( 
                                <View style={styles.dropdownArea}>
                                    <Newfile data={data} styles={styles} setDropValue={setDropValue} setisClicked={setisClicked} />
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
                                    <Newfile2 data={data2} styles={styles} setDropValue2={setDropValue2} setisClicked2={setisClicked2} />
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
                                    <Newfile3 data={data3} styles={styles} setDropValue3={setDropValue3} setisClicked3={setisClicked3} />
                                </View>
                            ) : null}

                        </View>
                        <View style={{ margin: 5 }}>
                            <Text style={{ color: "#000", fontWeight: "bold" }}>Light Type</Text>
                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity onPress={() => {
                                    setisClicked4(!isClicked4);
                                }} style={styles.drop}>
                                    <Text style={styles.droptext}>{DropValue4}</Text>
                                    {isClicked4 ? (
                                        <Image source={require("../images/down-arrow.png")} style={{ width: 20, height: 20, margin: 5 }} />
                                    ) : (
                                        <Image source={require("../images/up-arrow.png")} style={{ width: 20, height: 20, margin: 5 }} />
                                    )}
                                </TouchableOpacity>
                            </View>
                            {isClicked4 ? (
                                <View style={styles.dropdownArea}>
                                    <Newfile4 data={data4} styles={styles} setDropValue4={setDropValue4} setisClicked4={setisClicked4} />
                                </View>
                            ) : null}

                        </View>
                        <View style={{ margin: 5 }}>
                            <Text style={{ color: "#000", fontWeight: "bold" }}>Vendor</Text>
                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity onPress={() => {
                                    setisClicked5(!isClicked5);
                                }} style={styles.drop}>
                                    <Text style={styles.droptext}>{DropValue5}</Text>
                                    {isClicked5 ? (
                                        <Image source={require("../images/down-arrow.png")} style={{ width: 20, height: 20, margin: 5 }} />
                                    ) : (
                                        <Image source={require("../images/up-arrow.png")} style={{ width: 20, height: 20, margin: 5 }} />
                                    )}
                                </TouchableOpacity>
                            </View>
                            {isClicked5 ? (
                                <View style={styles.dropdownArea}>
                                    <Newfile5 data={data5} styles={styles} setDropValue5={setDropValue5} setisClicked5={setisClicked5} />
                                </View>
                            ) : null}

                        </View>
                        <View style={{ margin: 5 }}>
                            <Text style={{ color: "#000", fontWeight: "bold" }}>Expires On</Text>
                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity  style={styles.drop}>
                                    <Text style={styles.droptext}>DD/MM/YY</Text>
                                        <Image source={require("../images/calender.png")} style={{ width: 20, height: 20, margin: 5 }} />
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View style={{ margin: 5 }}>
                            <Text style={{ color: "#000", fontWeight: "bold" }}>Status</Text>
                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity onPress={() => {
                                    setisClicked6(!isClicked6);
                                }} style={styles.drop}>
                                    <Text style={styles.droptext}>{DropValue6}</Text>
                                    {isClicked6 ? (
                                        <Image source={require("../images/down-arrow.png")} style={{ width: 20, height: 20, margin: 5 }} />
                                    ) : (
                                        <Image source={require("../images/up-arrow.png")} style={{ width: 20, height: 20, margin: 5 }} />
                                    )}
                                </TouchableOpacity>
                            </View>
                            {isClicked6 ? (
                                <View style={styles.dropdownArea}>
                                    <Newfile6 data={data6} styles={styles} setDropValue6={setDropValue6} setisClicked6={setisClicked6} />
                                </View>
                            ) : null}

                        </View>
                    </View>
                    <View style={{marginVertical: 15}}>
                    <View style={styles.radiobox}>
                    <TouchableOpacity onPress={() => setSelectedRadio(1)}>
                        <View style={styles.radioflex}>
                            <View style={styles.radio}>
                                {
                                    selectedRadio === 1 ? <View style={styles.radiobg}></View> : null
                                }
                            </View>
                            <View>
                            <Text style={styles.radiotext}>Need</Text>
                            <Text style={styles.radiotext}>Scafolding</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedRadio(2)}>
                        <View style={styles.radioflex}>
                            <View style={styles.radio}>
                                {
                                    selectedRadio === 2 ? <View style={styles.radiobg}></View> : null
                                }
                            </View>
                            <View>
                            <Text style={styles.radiotext}>Need</Text>
                            <Text style={styles.radiotext}>Electrician</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedRadio(3)}>
                        <View style={styles.radioflex}>
                            <View style={styles.radio}>
                                {
                                    selectedRadio === 3 ? <View style={[styles.radiobg, styles.high]}></View> : null
                                }
                            </View>
                            <View>
                            <Text style={styles.radiotext}>Approvals /</Text>
                            <Text style={styles.radiotext}>Permissions</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                    </View>
                    <View style={{margin: 10, flexDirection: "row", justifyContent: "space-evenly"}}>
                    <TouchableOpacity onPress={() => navigation.navigate(Storelive)} style={styles.button3}>
                                    <Text style={styles.input5}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate(Storedetails)} style={styles.button2}>
                                    <Text style={styles.input4}>Save</Text>
                                </TouchableOpacity>
                    </View>
                    
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    scrollview: {
        flex: 1,
        
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
        marginRight: 2,
        color: "#000"
    },
    high: {
        fontWeight: "bold"
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
        color: "#000"
    },
    input4: {
        padding: 10,
        margin: 2,
        color: "#FB6C00",
        textAlign: "center",
        fontWeight: "bold"
    },
    input5: {
        padding: 10,
        margin: 2,
        color: "#000",
        textAlign: "center",
        fontWeight: "bold"
    },
    button: {
        borderColor: "#FB6C00",
        borderRadius: 10,
        // backgroundColor: "#fff",
        width: 50,
        borderWidth: 1,
        height: 35
    },
    button2: {
        borderColor: "#FB6C00",
        borderRadius: 10,
        // backgroundColor: "#fff",
        width: 75,
        borderWidth: 1,
        // height: 40,
        verticalAlign: "center",
        margin: 5
    },
    button3: {
        borderColor: "#BEBEBE",
        borderRadius: 10,
        // backgroundColor: "#fff",
        width: 75,
        borderWidth: 1,
        // height: 40,
        verticalAlign: "center",
        margin: 5
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
        alignSelf: "center",
        color: "#B5B5B5"
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
        flex: 1,
        color: "#BEBEBE"
    },
    radioflex: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 5
    },
    radiobox: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    radiobg: {
        backgroundColor: "#009600",
        height: 10,
        width: 11,
        borderRadius: 20,
        margin: 1
    },
    radio: {
        height: 15,
        width: 15,
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 20,
        margin: 10
    },
    radiotext: {
        fontSize: 13,
        color: "#000"
    },
})

export default Advertise;