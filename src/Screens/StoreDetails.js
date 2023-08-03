import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import StepIndicator from 'react-native-step-indicator';
import BottomNavigator from "../Navigations/BottomNavigation";
import Storereport from "./Storereport";
import Showroomlist from "./Showroomlist";
import ImagePicker from 'react-native-image-crop-picker';
import Advertise from "./Advertise";
import Storelive from "./Storelive";

const { width, height } = Dimensions.get("window");

const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#fe7013',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#fe7013'
}

const labels = ["28-02-2023", "11-05-2023", "3"];

const details = [
    {
        text1: "Asset ID",
        text2: ":",
        text3: "11795"
    },
    {
        text1: "Size ( W x H x D )",
        text2: ":",
        text3: "160 x 92"
    },
    {
        text1: "Location",
        text2: ":",
        text3: "Entry Left"
    },
    {
        text1: "Material",
        text2: ":",
        text3: "Vinyl With Sunboard"
    },
    {
        text1: "Brand",
        text2: ":",
        text3: "Vivo"
    },
    {
        text1: "Model",
        text2: ":",
        text3: "V27 / Y100"
    },
    {
        text1: "Vendor",
        text2: ":",
        text3: "Techno Signs Pvt Ltd"
    },

];

const labeldetails = [
    {
        text1: "Status",
        text2: ":",
        text3: "Expired"
    },
    {
        text1: "Brand",
        text2: ":",
        text3: "Vivo"
    },
    {
        text1: "Model",
        text2: ":",
        text3: "V27 /Y100"
    },
    {
        text1: "Vendor",
        text2: ":",
        text3: "Other"
    },
    {
        text1: "Updated",
        text2: ":",
        text3: "16-08-2022"
    },

];

const Storedetails = ({ navigation, props, route }) => {
    const [currentPosition, setcurrentPosition] = useState(0);
    const [image, setImage] = useState("");


    const takePhotoFromCamera = (props) => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
            setImage(image.path);
        });
    }

    const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            setImage(image.path);
        });
    }



    console.disableYellowBox = true;
    return (
        <ScrollView style={styles.fullscreen}>
            <View style={styles.header}>
                <View>
                    <TouchableOpacity style={{ alignItems: "center" }} onPress={() => navigation.navigate(Storelive)} >
                        <Image source={require("../images/left-arrow.png")} style={{ width: 20, height: 22 }} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.headtext}>Wall Branding 2 (11795)</Text>
                </View>
            </View>
            <View style={styles.status}>
                <Image source={require('../images/Statusred.png')} />
            </View>
            <View style={styles.imgback}>
                <View style={{ marginHorizontal: 5 }}>
                    <Image source={require('../images/Showroom1x.png')} style={{ width: "100%" }} />
                </View>
            </View>
            <View style={styles.imgdetails}>
                {details.map((item, index) => {
                    return (
                        <View key={index} style={{ flexDirection: "row", alignItems: "center" }}>
                            <View style={{ flex: 0.6, width: "100%" }}>
                                <Text style={styles.text}>{item.text1}</Text>
                            </View>
                            <View style={{ flex: 0.1 }}>
                                <Text style={styles.text2}>{item.text2}</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.text3}>{item.text3}</Text>
                            </View>
                        </View>
                    )
                })}
                <View>
                    <View style={{ marginVertical: 20 }}>
                        <Text style={styles.headtext2}>Ticket Details</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.text5}>Ticket Date : 31-04-2023</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={styles.text4}>Remarks : </Text>
                            <Text style={styles.text5}>Old Inshop, need to change to new model</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={{ marginVertical: 20 }}>
                        <Text style={styles.headtext2}>Asset History</Text>
                    </View>
                    <View style={styles.indicatorContainer}>
                        <StepIndicator
                            customStyles={customStyles}
                            currentPosition={currentPosition}
                            labels={labels}
                            stepCount={3}
                            direction="vertical"
                            renderLabel={({ position, stepStatus, label, crntPostion }) => {
                                return (
                                    <View style={styles.labelcontainer}>
                                        <View style={styles.labelcontent}>
                                            <Text style={styles.labeltext}>{labels[position]}</Text>
                                            {labeldetails.map((item, index) => {
                                                return (
                                                    <View key={index} style={{ flexDirection: "row", alignItems: "center" }}>
                                                        <View style={{ flex: 0.4, width: "100%" }}>
                                                            <Text style={styles.text}>{item.text1}</Text>
                                                        </View>
                                                        <View style={{ flex: 0.1 }}>
                                                            <Text style={styles.text2}>{item.text2}</Text>
                                                        </View>
                                                        <View style={{ flex: 1 }}>
                                                            <Text style={styles.text3}>{item.text3}</Text>
                                                        </View>
                                                    </View>
                                                )
                                            })}
                                        </View>
                                    </View>
                                )
                            }}
                        />
                    </View>
                    <View style={{ flexDirection: "row", flexWrap: "wrap",justifyContent: "space-around", width: "100%" }}>
                        <View>
                            <Text style={styles.labeltext2} onPress={() => navigation.navigate(Storereport)}>Store Report</Text>
                        </View>
                        <View>
                            <Text style={styles.labeltext2} onPress={takePhotoFromCamera}>Add Photo</Text>
                        </View>
                        <View>
                            <Text style={styles.labeltext2} onPress={choosePhotoFromLibrary}>Gallery</Text>
                        </View>
                        <View>
                            <Text style={styles.labeltext2} onPress={() => navigation.navigate("Advertise", image)}>Advertise</Text>
                        </View>
                    </View>
                    <View style={{width: "100%", height: 1, margin: 10, justifyContent: "center", alignItems: "center"}}>
                        <ImageBackground 
                            source={{
                                uri: image,
                            }}
                            
                            style={{height: 1, width: 1, opacity: 0}}
                            imageStyle={{borderRadius: 15}}
                        />
                    </View>
                </View>
            </View>
            {/* <BottomNavigator /> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    fullscreen: {
        flex: 1,
        height: "100%",
    },
    card: {
        borderWidth: 1,
        borderColor: "#BEBEBE",
        // elevation: 5,
        marginVertical: 5,
        padding: 15,
        backgroundColor: "#fff",
        borderRadius: 10
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
    status: {
        padding: 15
    },
    imgback: {
        paddingHorizontal: 10,
    },
    imgbackground: {
        // flex: 1,
        height: "100%",
        width: "100%"
    },
    imgdetails: {
        marginVertical: 10,
        marginHorizontal: 15,
    },
    text: {
        fontSize: 15,
        marginHorizontal: 2,
        alignContent: "flex-start",
        marginBottom: 10,
        color: "#000"

    },
    text2: {
        alignContent: "flex-start",
        marginBottom: 10,
        color: "#000"

    },
    text3: {
        alignContent: "flex-start",
        color: "#BEBEBE",
        marginBottom: 10
    },
    text4: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 10

    },
    text5: {
        fontSize: 14,
        color: "#000",
        marginBottom: 10
    },
    headtext2: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
    },
    indicatorContainer: {
        height: height - 170,
        width: width - 30,
        padding: 20,
        paddingTop: 0,
        margin: 15
    },
    labelcontainer: {
        marginTop: 17,
        paddingLeft: 5,
        padding: 10,
        marginBottom: 20,
        width: width - 100
    },
    labeltext: {
        fontSize: 15,
        color: "#000",
        fontWeight: "bold",
        marginBottom: 5,
    },
    labeltext2: {
        fontSize: 15,
        color: "#000",
        fontWeight: "bold",
        margin: 5,
        borderColor: "#fe7013",
        borderWidth: 2,
        width: "100%",
        height: 30,
        textAlign: "center",
        borderRadius: 5,
        textAlignVertical: "center",
        backgroundColor: "#fff"
    },
    labelcontent: {
        // marginVertical: 28.5
    }
})

export default Storedetails;