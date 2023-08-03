import { React } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import StoreExterior from "./StoreExterior";
import StoreInterior from "./StoreInterior";
import Storedetails from "./StoreDetails";

const Data = [
    {
        id: 1,
        boxhead: 'Store Exterior',
        boxtext: "Store Exterior, Elevation & Signages",
        bottomtext: "Last Updated :",
        date: "02/03/2022",
    },
    {
        id: 2,
        boxhead: 'Store Interior',
        boxtext: "Floors, Lighting, Ambience, Maintenance, Look & feel",
        bottomtext: "Last Updated :",
        date: "02/03/2022",
    },
    {
        boxhead: 'Displays',
        boxtext: "Shelves, Visual Merchandisings, Product displays & more",
        bottomtext: "Last Updated :",
        date: "02/03/2022",
    },
    {
        boxhead: 'Live Encounters',
        boxtext: "Live products, counters, maintenance, demo modes & more",
        bottomtext: "Last Updated :",
        date: "02/03/2022",
    },
    {
        boxhead: 'Promotional Materials & Brandings',
        boxtext: "Standees, Inshops, Table tops, Pamphlets etc..",
        bottomtext: "Last Updated :",
        date: "02/03/2022",
    },
    {
        boxhead: "Brand Culture & SOP's",
        boxtext: "Customer greetings, Staffs grooming, Attentiveness etc..",
        bottomtext: "Last Updated :",
        date: "02/03/2022",
    },

];

const Storereport = ({ navigation }) => {


    return (
        <ScrollView>
            <View style={styles.header}>
                <View>
                    <TouchableOpacity style={{ alignItems: "center" }} onPress={() => navigation.navigate(Storedetails)} >
                        <Image source={require("../images/left-arrow.png")} style={{ width: 20, height: 22 }} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.headtext}>Store Report</Text>
                </View>
            </View>
            <View>
                {Data.map((item, index) => {
                    return (
                        <TouchableOpacity key={item.id} style={styles.box}
                            onPress={() => {
                                if (item.id === 1) {
                                    navigation.navigate(StoreExterior)
                                }
                                if (item.id === 2) {
                                    navigation.navigate(StoreInterior)
                                }
                            }}
                        >
                            <View >
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ backgroundColor: "#BEBEBE", paddingRight: 5 }} />


                                    <View style={{ padding: 10, width: "70%" }}>
                                        <Text style={styles.boxhead}>{item.boxhead}</Text>
                                        <Text style={styles.boxtext}>{item.bottomtext}</Text>
                                        <View style={{ flexDirection: "row", bottom: 0 }}>
                                            <Text style={styles.boxtext}>{item.bottomtext}</Text>
                                            <Text style={styles.boxtext2}>{item.date}</Text>
                                        </View>
                                    </View>


                                    <View style={{ paddingVertical: 10, alignItems: "center", width: "30%", margin: 0 }}>
                                        <Image source={require("../images/details.png")} style={styles.img} />
                                    </View>
                                </View>

                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </ScrollView>

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
    box: {
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor: "#fff",
        elevation: 5,
        // height: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 2,
        flexDirection: "row",
        width: "90%"
    },
    boxhead: {
        fontSize: 15,
        fontWeight: "500",
        color: "#000",
        padding: 5,
        width: "100%"

    },
    boxtext: {
        fontSize: 13,
        color: "#00000066",
        padding: 5
    },
    boxtext2: {
        fontSize: 13,
        color: "#000000",
        padding: 5
    },
    labeltext: {
        fontSize: 15,
        color: "#000",
        fontWeight: "bold",
        margin: 20,
    },
    // button1: {
    //   margin: 20
    // }
})

export default Storereport