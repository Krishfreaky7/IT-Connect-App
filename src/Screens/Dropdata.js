import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";


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

const Dropdata = () => {

    return (
        <SafeAreaView>
            <FlatList data={data}  renderItem={({ item, index }) => {
                return (
                  
                        <TouchableOpacity onPress={() => {
                            setDropValue2(item.name);
                            setisClicked2(false);
                        }} style={styles.boardingItem}>
                            <Text>{item.name}</Text>
                        </TouchableOpacity>

                )
            }} />
        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    boardingItem: {
        width: "85%",
        height: 40,
        borderBottomWidth: 0.2,
        borderBottomColor: "#8e8e8e",
        alignSelf: "center"
    }
})

export default Dropdata;