import { React, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Storereport from "./Storereport";





const StoreExterior = ({navigation}) => {
    const [selectedRadio, setSelectedRadio] = useState(0);
    const [selectedRadio2, setSelectedRadio2] = useState(0);
    const [selectedRadio3, setSelectedRadio3] = useState(0);
    const [selectedRadio4, setSelectedRadio4] = useState(0);


    return (
        <View style={{ backgroundColor: "#fff" }}>
            <View style={styles.header}>
                <View>
                    <TouchableOpacity style={{ alignItems: "center" }} onPress={() => navigation.navigate(Storereport)} >
                        <Image source={require("../images/left-arrow.png")} style={{ width: 20, height: 22 }} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.headtext}>Store Exterior</Text>
                </View>
            </View>
            <View style={styles.fullbox}>
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.box}>
                        <Text style={styles.boxtext}>1.  Store Signage current condition</Text>
                    </View>
                    <View style={{ paddingVertical: 1, alignItems: "center", width: "40%" }}>
                        <Image source={require("../images/InsertImage.png")} style={styles.img} />
                    </View>
                </View>
                <View style={styles.radiobox}>
                    <TouchableOpacity onPress={() => setSelectedRadio(1)}>
                        <View style={styles.radioflex}>
                            <View style={styles.radio}>
                                {
                                    selectedRadio === 1 ? <View style={styles.radiobg}></View> : null
                                }
                            </View>
                            <Text style={styles.radiotext}>Very Bad</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedRadio(2)}>
                        <View style={styles.radioflex}>
                            <View style={styles.radio}>
                                {
                                    selectedRadio === 2 ? <View style={styles.radiobg}></View> : null
                                }
                            </View>
                            <Text style={styles.radiotext}>Bad</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedRadio(3)}>
                        <View style={styles.radioflex}>
                            <View style={styles.radio}>
                                {
                                    selectedRadio === 3 ? <View style={styles.radiobg}></View> : null
                                }
                            </View>
                            <Text style={styles.radiotext}>Average</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedRadio(4)}>
                        <View style={styles.radioflex}>
                            <View style={styles.radio}>
                                {
                                    selectedRadio === 4 ? <View style={styles.radiobg}></View> : null
                                }
                            </View>
                            <Text style={styles.radiotext}>Average</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedRadio(5)}>
                        <View style={styles.radioflex}>
                            <View style={styles.radio}>
                                {
                                    selectedRadio === 5 ? <View style={styles.radiobg}></View> : null
                                }
                            </View>
                            <Text style={styles.radiotext}>Look New</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.fullbox}>
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.box}>
                        <Text style={styles.boxtext}>2.  Is the signage Clean & Working ?</Text>
                    </View>
                    <View style={{ paddingVertical: 1, alignItems: "center", width: "40%" }}>
                        <Image source={require("../images/InsertImage2.png")} style={styles.img} />
                    </View>
                </View>
                <View style={styles.radiobox}>
                    <TouchableOpacity onPress={() => setSelectedRadio2(1)}>
                        <View style={styles.radioflex}>
                            <View style={styles.radio}>
                                {
                                    selectedRadio2 === 1 ? <View style={styles.radiobg}></View> : null
                                }
                            </View>
                            <Text style={styles.radiotext}>Yes</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedRadio2(2)}>
                        <View style={styles.radioflex}>
                            <View style={styles.radio}>
                                {
                                    selectedRadio2 === 2 ? <View style={styles.radiobg}></View> : null
                                }
                            </View>
                            <Text style={styles.radiotext}>No</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.fullbox}>
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.box}>
                        <Text style={styles.boxtext}>3.  Glass façade is clean without finger prints & pasted communication (Vinyl / A4 Prints etc)</Text>
                    </View>
                    <View style={{ paddingVertical: 1, alignItems: "center", width: "40%" }}>
                        <Image source={require("../images/InsertImage2.png")} style={styles.img} />
                    </View>
                </View>
                <View style={styles.radiobox}>
                    <TouchableOpacity onPress={() => setSelectedRadio3(1)}>
                        <View style={styles.radioflex}>
                            <View style={styles.radio}>
                                {
                                    selectedRadio3 === 1 ? <View style={styles.radiobg}></View> : null
                                }
                            </View>
                            <Text style={styles.radiotext}>Yes</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedRadio3(2)}>
                        <View style={styles.radioflex}>
                            <View style={styles.radio}>
                                {
                                    selectedRadio3 === 2 ? <View style={styles.radiobg}></View> : null
                                }
                            </View>
                            <Text style={styles.radiotext}>No</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.fullbox}>
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.box}>
                        <Text style={styles.boxtext}>4.  Is the passage and entrance to the store is clear without any hindrances or obstacles ?</Text>
                    </View>
                    <View style={{ paddingVertical: 1, alignItems: "center", width: "40%" }}>
                        <Image source={require("../images/InsertImage.png")} style={styles.img} />
                    </View>
                </View>

                <View style={styles.radiobox}>
                    <TouchableOpacity onPress={() => setSelectedRadio4(1)}>
                        <View style={styles.radioflex}>
                            <View style={styles.radio}>
                                {
                                    selectedRadio4 === 1 ? <View style={styles.radiobg}></View> : null
                                }
                            </View>
                            <Text style={styles.radiotext}>Yes</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedRadio4(2)}>
                        <View style={styles.radioflex}>
                            <View style={styles.radio}>
                                {
                                    selectedRadio4 === 2 ? <View style={styles.radiobg}></View> : null
                                }
                            </View>
                            <Text style={styles.radiotext}>No</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
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
    fullbox: {
        padding: 15
    },
    box: {
        marginHorizontal: 20,
        marginVertical: 10,
        width: "60%"
    },
    boxtext: {
        width: "100%",
        fontSize: 12
    },
    radiotext: {
        fontSize: 13,
    },
    radio: {
        height: 15,
        width: 15,
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 20,
        margin: 10
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
    line: {
        backgroundColor: "#000",
        height: 0.5,
        width: "80%",
        alignSelf: "center"
    }
})

export default StoreExterior