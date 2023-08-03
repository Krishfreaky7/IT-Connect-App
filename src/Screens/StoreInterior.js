import { React, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Storereport from "./Storereport";

const StoreInterior = ({ navigation }) => {
    const [selectedRadio, setSelectedRadio] = useState(0);
    const [selectedRadio2, setSelectedRadio2] = useState(0);
    const [selectedRadio3, setSelectedRadio3] = useState(0);
    const [selectedRadio4, setSelectedRadio4] = useState(0);
    const [selectedRadio5, setSelectedRadio5] = useState(0);


    return (
        <View style={{ backgroundColor: "#fff" }}>
            <View style={styles.header}>
                <TouchableOpacity style={{ alignItems: "center" }} onPress={() => navigation.navigate(Storereport)} >
                    <Image source={require("../images/left-arrow.png")} style={{ width: 20, height: 22 }} />
                </TouchableOpacity>
                <View >
                    <Text style={styles.headtext}>Store Interior</Text>
                </View>
            </View>

            <View style={styles.fullbox}>
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.box}>
                        <Text style={styles.boxtext}>1. Is the shop floor well lit ?</Text>
                    </View>
                    <View style={{ paddingVertical: 1, alignItems: "center", width: "40%" }}>
                        <Image source={require("../images/InsertImage2.png")} style={styles.img} />
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
                            <Text style={styles.radiotext}>Yes</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedRadio(2)}>
                        <View style={styles.radioflex}>
                            <View style={styles.radio}>
                                {
                                    selectedRadio === 2 ? <View style={styles.radiobg}></View> : null
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
                        <Text style={styles.boxtext}>2. Does the store smell nice</Text>
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
                        <Text style={styles.boxtext}>3. Aisles are clearly defined and free of clutter</Text>
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
                        <Text style={styles.boxtext}>4. All the Products in the shop floor are easily accessible</Text>
                    </View>
                    <View style={{ paddingVertical: 1, alignItems: "center", width: "40%" }}>
                        <Image source={require("../images/InsertImage2.png")} style={styles.img} />
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
            <View style={styles.line}></View>
            <View style={styles.fullbox}>
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.box}>
                        <Text style={styles.boxtext}>5.is all the counters, tables, Shelves and products are clean and dust free ?</Text>
                    </View>
                    <View style={{ paddingVertical: 1, alignItems: "center", width: "40%" }}>
                        <Image source={require("../images/InsertImage2.png")} style={styles.img} />
                    </View>
                </View>

                <View style={styles.radiobox}>
                    <TouchableOpacity onPress={() => setSelectedRadio5(1)}>
                        <View style={styles.radioflex}>
                            <View style={styles.radio}>
                                {
                                    selectedRadio5 === 1 ? <View style={styles.radiobg}></View> : null
                                }
                            </View>
                            <Text style={styles.radiotext}>Yes</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedRadio4(2)}>
                        <View style={styles.radioflex}>
                            <View style={styles.radio}>
                                {
                                    selectedRadio5 === 2 ? <View style={styles.radiobg}></View> : null
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
        flexDirection: "row",
        height: "8%"
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
        fontSize: 12,
        color: "#000",
        fontWeight: "bold"
    },
    radiotext: {
        fontSize: 13,
        color: "#000"
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

export default StoreInterior